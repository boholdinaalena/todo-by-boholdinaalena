<template>
    <div class="list-item">
      <div class="list-info">
        <input :class="'item-round'"
               type="checkbox" 
               :checked="item.check"
               @click="completeTask"
               />
        <span>{{ item.text }}</span>
      </div>
      <img class="item-img" 
           src="../assets/trash.svg" 
           alt="trash"
           @click="removeTask" />
    </div>
</template>
<script lang="js">
export default {
  name: "list",
  props: {
    item: Object,
    index: Number,
  },
  methods: {
    removeTask() {
        this.$emit("removeTask", this.index);
    },
    completeTask() {
      if (this.item.check) {
        this.$emit("addCompleteTask", this.index)
      } else {
        this.$emit("removeCompleteTask", this.index)
      }
    }
  },
};
</script>
