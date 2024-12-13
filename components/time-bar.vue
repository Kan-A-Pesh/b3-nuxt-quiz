<template>
    <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 overflow-hidden">
        <div class="bg-orange-600 h-2.5 rounded-full" :style="{ width: `${remainingTimeInPercent}%` }" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    startedAt: {
        type: Number,
        required: false,
        default: null
    },
    time: {
        type: Number,
        required: true
    }
})

const startedAt = ref(props.startedAt || Date.now())
const availableTime = ref(props.time)

const remainingTimeInPercent = ref(100)

function update() {
    const now = Date.now()
    const timeElapsed = (now - startedAt.value) / 1000
    const remainingTime = Math.max(0, availableTime.value - timeElapsed)
    remainingTimeInPercent.value = (remainingTime / availableTime.value) * 100
    requestAnimationFrame(update)
}

requestAnimationFrame(update)
</script>
