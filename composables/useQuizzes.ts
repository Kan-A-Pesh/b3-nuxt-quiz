export const useQuizzes = async () => {
  const quizzes = ref<Quiz[]>([])

  const refetchQuizzes = async (search?: string) => {
    let query = queryContent<Quiz>('/quizzes')
    if (search) query = query.where({ title: { $contains: search } })

    quizzes.value = await query.find()
  }

  await refetchQuizzes()

  return {
    quizzes,
    refetchQuizzes,
  }
}
