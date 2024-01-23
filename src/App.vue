<template>
  <div class="wrapper">
    <div class="header">
      <img src="./assets/rocket.svg" />

      <div><span class="header-logo">TO</span>DO</div>
    </div>

    <UserInput @addTask="addTask" @removeTask="removeTask" />

    <div class="todo container">
      <div class="todo-header">
        <div class="todo-count">
          Созданные задачи
          <div class="todo-num">{{ list.length }}</div>
        </div>
        <div class="todo-amount">
          Завершенно
          <div class="todo-num">0 из {{ list.length }}</div>
        </div>
      </div>
      <div class="list">
        <ListItem
          v-for="(item, index) in list"
          :key="item.id"
          :item="item"
          :index="index"
          @removeTask="removeTask"
          @addCompleteTask="addCompleteTask"
          @removeCompleteTask="removeCompleteTask"
        />
      </div>
    </div>
  </div>
</template>
<script lang="js">
import UserInput from './components/UserInput.vue';
import ListItem from './components/ListItem.vue';

export default {
  name: 'wrapper',
  components: {
    UserInput,
    ListItem
  },
  data() {
    return {
      list: [],
    }
  },
  methods: {
    addTask(task, id) {
      this.list.unshift({text: task, id: id, check: false});
    },
    removeTask(index) {
      this.list.splice(index, 1);
    },
    addCompleteTask(index) {
      this.list[index].check = true;
    },
    removeCompleteTask(index) {
      this.list[index].check = false;
    },
  }
}
</script>
