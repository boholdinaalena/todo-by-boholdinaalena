<template>
    <input v-model="modelValue" class="body-input" type="text" v-bind="$attrs" />
</template>


<script setup>
// import { computed } from 'vue'

// const test = computed({
//     get() {
//         return props.modelValue
//     },
//     // setter
//     set(newValue) {
//         emit('update:modelValue', newValue)
//     }
// })

// const props = defineProps({
//     modelValue: {
//         type: String,
//         default: ''
//     },
// })

// const emit = defineEmits(['update:modelValue'])

const modelValue = defineModel()
</script>