<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="my-auto mx-4">
        <p class="mb-4 w-full text-center">
            {{ props.question.text }}
        </p>
        <ul>
            <li v-for="(option, index) in props.question.options" :key="option"
                class="mb-2 p-4 bg-orange-50 hover:bg-orange-200 rounded-xl">
                <label class="flex items-center">
                    <input v-model="selectedOption" type="radio" name="option" class="mr-2" :value="index">
                    {{ option }}
                </label>
            </li>
        </ul>
        <div class="flex justify-center mt-4 gap-2">
            <button
                class="text-white py-2 px-4 rounded w-32 bg-orange-500 hover:bg-orange-600 disabled:opacity-25 disabled:cursor-not-allowed"
                :disabled="selectedOption === -1" @click="handleNextQuestion">Next</button>
        </div>
    </div>
</template>


<script setup lang="ts">
const props = defineProps({
    question: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['on-answer'])

const selectedOption = ref<number>(-1)

const handleNextQuestion = () => {
    emit('on-answer', selectedOption.value)
}
</script>
