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
      let now = new Date();
      this.$emit("addTask", this.task, now);
      this.task = "";
      this.id++;
    },
  },
};
</script>
