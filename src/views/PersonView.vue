<template>
</template>
<script setup>
import instance from '../app/api/instance.js';
import { ref, onMounted } from 'vue';

const post = ref([])

const loadUsers = async () => {
  instance
  .get("https://jsonplaceholder.typicode.com/users/1")
  .then(result => {
  post.value = result.data;
})
}

onMounted(() => {
  loadUsers()
})
</script>