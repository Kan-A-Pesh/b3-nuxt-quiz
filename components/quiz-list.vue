<template>
    <ul>
        <li v-for="quiz in quizzes" :key="quiz.slug" class="mb-2">
            <div class="border p-4 rounded flex justify-between gap-2 items-start">
                <div>
                    <h2 class="font-semibold">{{ quiz.title }}</h2>
                    <p>Number of Questions: {{ quiz.questions.length }}</p>
                </div>
                <NuxtLink :to="`/quiz/${quiz.slug}`" class="bg-orange-500 text-white py-2 px-4 rounded">Start
                    Quiz</NuxtLink>
            </div>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useQuizzes } from '~/composables/useQuizzes';

const props = defineProps({
    search: {
        type: String,
        required: false,
        default: null
    }
})

const { quizzes, refetchQuizzes } = await useQuizzes();

watch(() => props.search, () => {
    refetchQuizzes(props.search)
})
</script>
