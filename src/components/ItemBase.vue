<template>
  <div class="list-item" @click="handleClick(props.todo.id)">
    <div class="list-info">

      {{ props.todo.isActive }}
      <input :class="{ 'item-round': props.todo.isActive }" type="checkbox" />
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