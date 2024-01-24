<template>
  <div class="list-item" @click="handleClick(props.todo.id)">
    <div class="list-info">
      <input :class="props.todo.isActive ? 'item-active' : 'item-round'" type="checkbox" />
      <span>{{ props.todo.title }}</span>
    </div>
    <img @click="handleDelete(props.todo.id)" class="item-img" src="../assets/trash.svg" alt="trash" />
  </div>
</template>


<script setup>
const props = defineProps({
  todo: {
    type: Object,
  }
})

const emit = defineEmits(['delete', 'choose'])

const handleDelete = (id) => {
  emit('delete', id)
}

const handleClick = (id) => {
  emit('choose', id)
}
</script>
<style lang="scss">
.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 3px solid #333;
  padding: 16px;
  background: #333;
  font-size: 12pt;
  color: #ffffff;

  &__icon {
    width: 17px;
  }
}

.list-info {
  gap: 12px;
  display: flex;
  justify-content: left;

  .item-active + span {
    color: #808080;
    text-decoration: line-through;
  }
}
.item-round, .item-active {
  appearance: none;
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  border: 2px solid #1e6f9f;
  border-radius: 999px;
  cursor: pointer;
}

.item-active {
  background: url(../assets/check.svg);
  background-position: center;
  border-color: #5e60ce;
}


.item-img {
  cursor: pointer;
}

</style>