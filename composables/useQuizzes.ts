import type { ParsedContent } from '@nuxt/content'

export interface Quiz extends ParsedContent {
  title: string
  questions: string[]
}

export interface Question extends ParsedContent {
  text: string
  options: string[]
  answer: number
}

export const useQuizzes = () => {
  const startedAt = ref<number>(0)
  const currentQuestion = ref<number>(0)

  const fetchAllQuizzes = async () =>
    await useAsyncData('quizzes', async () => {
      return await queryContent<Quiz>('/quizzes').find()
    })

  const fetchQuiz = async (slug: string) =>
    await useAsyncData(`quiz-${slug}`, async () => {
      return await queryContent<Quiz>(`/quizzes/${slug}`).findOne()
    })

  const setCurrentQuestion = (index: number) => {
    startedAt.value = Date.now()
    currentQuestion.value = index
  }

  const fetchCurrentQuestion = async (slug: string) => {
    const { data: quiz } = await fetchQuiz(slug)
    return await useAsyncData(`question-${slug}`, async () => {
      return await queryContent<Question>(
        `/questions/${quiz.value?.questions[currentQuestion.value]}`
      ).findOne()
    })
  }

  return {
    fetchAllQuizzes,
    fetchQuiz,
    setCurrentQuestion,
    fetchCurrentQuestion,
    startedAt,
    currentQuestion,
  }
}
