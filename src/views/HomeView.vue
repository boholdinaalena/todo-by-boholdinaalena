<template>
  <div class="wrapper">
    <div class="user-input">
      <div class="body container">
        <InputBase
          class="body-input"
          @keyup.enter="handleClick"
          type="text"
          placeholder="Добавить новую задачу"
          v-model="title"
        />
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
        <transition-group name="slide">
          <ItemBase
            placeholder="Добавить новую задачу"
            v-for="todo in todos"
            @delete="handleDelete"
            @choose="handleChoose"
            :todo="todo"
            :key="todo.id"
          />
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script setup>
import { functions } from "@vueuse/core/metadata.mjs";
import InputBase from "../components/InputBase.vue";
import ItemBase from "../components/ItemBase.vue";
import { ref, computed, watch, onMounted } from "vue";

const todos = ref([]);

const getStorage = () => {
  const storageTodos = JSON.parse(localStorage.getItem("todos"));
  console.log(storageTodos);
  todos.value = storageTodos;
};

const setStorage = (val) => {
  localStorage.setItem("todos", JSON.stringify(val));
};

onMounted(() => {
  getStorage();
});

watch(
  todos,
  (newVal) => {
    setStorage(newVal);
  },
  { deep: true }
);

const title = ref("");

const handleClick = () => {
  if (title.value.length < 1) return;
  todos.value.push({
    id: +new Date(),
    title: title.value,
    isActive: false,
  });
  //Обновляем значение в дочернеи компоненте InputBase
  title.value = "";
};

//Вычисляемое свойство автоматически отслеживает свои реактивные зависимости.
//Vue знает, что вычисление fineshedTodos зависит от todos,
//поэтому при любых изменениях в todos vue "пересчитает" значение  finishedTodos.
const finishedTodos = computed(() => {
  const result = todos.value;
  return result.filter((el) => el.isActive).length;
});

//Перезаписываем значение todos новым массивом без переданного элемента
const handleDelete = (id) => {
  todos.value = todos.value.filter((el) => el.id !== id);
};
//Переключаем состояние переданного элемента
// с невыполненное на выполненное, с выполненное на невыполненное
const handleChoose = (id) => {
  const todo = todos.value.find((el) => el.id === id);
  todo.isActive = !todo.isActive;
};
</script>

<style scoped lang="scss">
.slide-enter-active {
  animation: enter 0.6s ease;
}
.slide-leave-active {
  animation: out 0.6s ease;
}
@keyframes enter {
  0% {
    opacity: 0;
    transform: translateX(-200px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

@keyframes out {
  0% {
    opacity: 1;
    transform: translateX(0px);
  }
  100% {
    opacity: 0;
    transform: translateX(200px);
  }
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
