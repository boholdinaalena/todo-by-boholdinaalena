<template>
  <div class="user-input">
    <div class="body container">
      <input
        class="body-input"
        type="text"
        placeholder="Добавить новую задачу"
        v-model="task"
      />
      <button class="body-btn" @click="addTask">Создать</button>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: "user-input",
  data() {
    return {
      task: "",
      id: 0
    };
  },
  methods: {
    addTask() {
      this.$emit("addTask", this.task, this.id);
      this.task = "";
      this.id++;
    },
  },
};
</script>
