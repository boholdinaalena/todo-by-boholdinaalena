<template>
    <div class="container">
        <div class="list-item" v-for="item in instance">
            {{ item.name }}
        </div>
    </div>
</template>
<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue';


const instance = ref([])
const getInstance = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => instance.value = res.data)
    .catch(error => console.log(error))
}

onMounted(() => getInstance())
</script>
<style lang="scss">
    
</style>