<template>
  <div class="wrapper">
    <div class="header">
      <img src="./assets/rocket.svg" />

      <div><span class="header-logo">TO</span>DO</div>
    </div>

    <div class="user-input">
      <div class="body container">
        <InputBase class="body-input" @keyup.enter="handleClick" type="text" placeholder="Добавить новую задачу"
          v-model="title" />
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
        <ItemBase placeholder="Добавить новую задачу" v-for="todo in todos" @delete="handleDelete" @choose="handleChoose"
          :todo="todo" :key="todo.id" />
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
  //Обновляем значение в дочернеи компоненте InputBase
  title.value = ''

}

//Вычисляемое свойство автоматически отслеживает свои реактивные зависимости. 
//Vue знает, что вычисление fineshedTodos зависит от todos, 
//поэтому при любых изменениях в todos vue "пересчитает" значение  finishedTodos.
const finishedTodos = computed(() => {
  const result = todos.value
  return (result.filter(el => el.isActive)).length
})

//Перезаписываем значение todos новым массивом без переданного элемента
const handleDelete = (id) => {
  todos.value = todos.value.filter(el => el.id !== id)
}
//Переключаем состояние переданного элемента
// с невыполненное на выполненное, с выполненное на невыполненное
const handleChoose = (id) => {
  const todo = todos.value.find(el => el.id === id)
  todo.isActive = !todo.isActive
}
</script>


<style scoped lang="scss">

.container {
  max-width: 736px;
  margin: 0 auto;
}

.header {
  background: #0d0d0d;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: #5e60ce;
  font-size: 40px;
  font-weight: 900;
  padding: 72px 0;
}

.header-logo {
  color: #4ea8de;
}

.body {
  display: flex;
  align-items: stretch;
  gap: 8px;
  transform: translateY(-50%);
}

.body-input {
  flex: 1;
  background: #262626;
  padding: 16px;
  color: #ffffff;
  border-radius: 10px;
  border: none;

  &::placeholder {
    color: #808080;
  }
}

.body-btn {
  background: #1e6f9f;
  border-radius: 8px;
  padding: 16px;
  color: #fff;
  font-weight: 700;
  line-height: 140%;
  cursor: pointer;
}

.todo-header {
  display: flex;
  justify-content: space-between;
  color: #5e60ce;
}

.todo-count,
.todo-amount {
  display: flex;
  gap: 8px;
  font-weight: 700;
}

.todo-count {
  color: #4ea8de;
}

.todo-num {
  color: #d9d9d9;
  padding: 2px 8px;
  background: #333;
  border-radius: 999px;
}

.todo {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>