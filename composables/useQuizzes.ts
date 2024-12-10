import { ref } from 'vue';
import type { ParsedContent } from '@nuxt/content';

export interface Quiz extends ParsedContent {
  title: string;
  questions: string[];
}

export interface Question extends ParsedContent {
  text: string;
  options: string[];
  answer: number;
}

export const useQuizzes = () => {
  const quiz = ref<Quiz | null>(null);
  const questions = ref<Question[]>([]);

  const fetchAllQuizzes = async () => await useAsyncData('quizzes', async () => {
    return queryContent<Quiz>('/quizzes').find();
  });

  const selectQuiz = async (slug: string) => {
    quiz.value = await queryContent<Quiz>(`/quizzes/${slug}`).findOne();
    questions.value = await queryContent<Question>(`/questions/${quiz.value?.slug}`).find();
  };

  const getCurrentQuiz = () => {
    return quiz.value;
  };

  const getCurrentQuestions = () => {
    return questions.value;
  };

  return {
    fetchAllQuizzes,
    selectQuiz,
    getCurrentQuiz,
    getCurrentQuestions,
  };
};
