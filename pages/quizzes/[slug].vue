<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Quiz: {{ quiz.title }}</h1>

    </div>
</template>

<script setup lang="ts">
import { useQuizzes } from '@/composables/useQuizzes';

const { selectQuiz } = useQuizzes();
const route = useRoute();
selectQuiz(route.params.slug as string);
</script>
