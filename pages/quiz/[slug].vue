<template>
    <div class="container mx-auto p-4 flex-1 flex flex-col">
        <h1 class="text-2xl font-bold mb-4">{{ quiz.data.value?.title }}</h1>
        <h2 class="mb-2">Question {{ currentQuestion + 1 }} of {{ quiz.data.value?.questions.length
            }}</h2>
        <ClientOnly>
            <TimeBar :started-at="startedAt" :time="5" />
        </ClientOnly>

        <QuizQuestion />
    </div>
</template>

<script setup lang="ts">
import { useQuizzes } from '@/composables/useQuizzes';

const { fetchQuiz, currentQuestion, startedAt } = useQuizzes();
const route = useRoute();
const slug = route.params.slug as string;

const quiz = await fetchQuiz(slug);

</script>
