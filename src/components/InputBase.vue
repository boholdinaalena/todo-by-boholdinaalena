<template>
    <input v-model="test" class="body-input" type="text" placeholder="Добавить новую задачу" />
</template>


<script setup>
import { computed } from 'vue'

const test = computed({
    get() {
        return props.modelValue
    },
    // setter
    set(newValue) {
        emit('update:modelValue', newValue)
    }
})

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
})

const emit = defineEmits(['update:modelValue'])


</script>