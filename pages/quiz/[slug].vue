<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="container mx-auto p-4 flex-1 flex flex-col">
        <h1 class="text-2xl font-bold mb-4">{{ quizState.quiz.value.title }}</h1>

        <div v-if="quizState.question.value !== null" class="flex-1 flex flex-col">

            <h2 class="mb-2">Question {{ quizState.currentQuestion.value + 1 }} of {{
                quizState.quiz.value.questions.length
            }}</h2>

            <ClientOnly :key="quizState.currentQuestion.value">
                <TimeBar :started-at="quizState.startedAt" :time="5" />
            </ClientOnly>

            <QuizQuestion :key="quizState.currentQuestion.value" :question="quizState.question.value"
                @on-answer="quizState.submitAnswer" />


            <div class="flex justify-center mt-4 mb-8 gap-2 text-xl">
                <span>Points: {{ quizState.score }}</span>
            </div>
        </div>

        <div v-else class="flex-1 flex items-center justify-center  flex-col">
            <h2 class="text-2xl font-bold">Quiz Finished</h2>
            <p class="mb-4 mt-2">Score: {{ quizState.score }}</p>
            <NuxtLink to="/" class="bg-orange-500 text-white py-2 px-4 rounded mt-4">Home</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;
const quizState = await useQuiz(slug);
</script>
