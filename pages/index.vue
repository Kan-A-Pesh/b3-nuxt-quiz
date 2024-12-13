<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Available Quizzes</h1>
        <div class="mb-4">
            <input v-model="search" type="text" placeholder="Search..." class="border rounded p-2 w-full">
        </div>
        <QuizList :search="search" />
    </div>
</template>

<script setup lang="ts">
const search = ref<string>('')
</script>
