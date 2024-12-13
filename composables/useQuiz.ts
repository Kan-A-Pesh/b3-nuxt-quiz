import type { ParsedContent } from '@nuxt/content'

export interface Quiz extends ParsedContent {
  slug: string
  title: string
  questions: Question[]
}

export interface Question {
  text: string
  options: string[]
  answer: number
}

export const useQuiz = async (slug: string) => {
  const quiz = ref<Quiz | null>(null)
  const currentQuestion = ref<number>(0)
  const score = ref<number>(0)
  const startedAt = ref<number>(Date.now())

  const refetchQuiz = async () => {
    quiz.value = await queryContent<Quiz>(`/quizzes/${slug}`).findOne()
  }

  const question = computed(() => {
    if (currentQuestion.value >= quiz.value?.questions.length) return null

    return quiz.value?.questions[currentQuestion.value]
  })

  const submitAnswer = (answer: number) => {
    if (answer === question.value?.answer) {
      const elapsedTime = Math.max(0, 5 - Math.floor((Date.now() - startedAt.value) / 1000))
      score.value += elapsedTime + 1
    }

    currentQuestion.value++
    startedAt.value = Date.now()
  }

  await refetchQuiz()

  return {
    quiz,
    score,
    startedAt,
    question,
    currentQuestion,
    submitAnswer,
  }
}
