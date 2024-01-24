<template>
    <input v-model="modelValue" class="body-input" type="text" v-bind="$attrs" />
</template>


<script setup>
// import { computed } from 'vue'

// const test = computed({
       //getter. Вычисляемые свойства по умолчанию доступны только для метода получения get().
       //Получает значение из prop, если prop изменился обновляет test 
//     get() {
//         return props.modelValue
//     },
//      //setter. Предоставляем логику записи.
        //Если изменился text передаем новое значение родительскому компоненту
        //и v-model title получает значение newValue
//     set(newValue) {
//         emit('update:modelValue', newValue)
//     }
// })
//Берем значение из v-model родительского компонета.
//Когда обновляется родительский компонент, все реквизиты в дочернем 
//компоненте будут обновляться с использованием последнего значения.
// const props = defineProps({
//     modelValue: {
//         type: String,
//         default: ''
//     },
// })
//Передача входного параметра modelValue. 
// const emit = defineEmits(['update:modelValue'])

//Создали двустороннюю привязку данных между компонентами.
const modelValue = defineModel()
</script>