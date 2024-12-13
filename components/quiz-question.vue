<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="my-auto mx-4">
        <p class="mb-4 w-full text-center">
            {{ question.data.value?.text }}
        </p>
        <ul>
            <li v-for="option in question.data.value?.options" :key="option"
                class="mb-2 p-4 bg-orange-50 hover:bg-orange-200 rounded-xl">
                <label class="flex items-center">
                    <input type="radio" name="option" class="mr-2">
                    {{ option }}
                </label>
            </li>
        </ul>
    </div>
</template>


<script setup lang="ts">
const { fetchCurrentQuestion } = useQuizzes();
const route = useRoute();
const slug = route.params.slug as string;

const question = await fetchCurrentQuestion(slug);
</script>
