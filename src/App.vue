<template>
  <div class="wrapper">
    <div class="header">
      <img src="./assets/rocket.svg" />

      <div><span class="header-logo">TO</span>DO</div>
    </div>

    <div class="user-input">
      <div class="body container">
        <InputBase class="body-input" type="text" placeholder="Добавить новую задачу" v-model="title" />
        <button class="body-btn" @click="handleClick">Создать</button>
      </div>
    </div>

    <div class="todo container">
      <div class="todo-header">
        <div class="todo-count">
          Созданные задачи
          <div class="todo-num">{{ todos.length }}</div>
        </div>
        <div class="todo-amount">
          Завершенно
          <div class="todo-num">{{ finishedTodos }} из {{ todos.length }}</div>
        </div>
      </div>
      <div class="list">
        <ItemBase v-for="todo in todos" @delete="handleDelete" @choose="handleChoose" :todo="todo" :key="todo.id" />
      </div>
    </div>
  </div>
</template>

<script setup>
import InputBase from './components/InputBase.vue'
import ItemBase from './components/ItemBase.vue'
import { ref, computed } from 'vue'

const todos = ref([])
const title = ref('')

const handleClick = () => {
  todos.value.push({
    id: +new Date(),
    title: title.value,
    isActive: false
  })

  title.value = ''

}

const finishedTodos = computed(() => {
  const result = [...todos.value]
  return (result.filter(el => el.isActive)).length
})


const handleDelete = (id) => {
  todos.value = todos.value.filter(el => el.id !== id)
}
const handleChoose = (id) => {
  const todo = todos.value.find(el => el.id === id)
  todo.isActive = !todo.isActive
}
</script>


<style scoped lang="scss"></style>