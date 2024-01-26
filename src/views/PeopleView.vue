<template>
  <div class="container">
    <div class="body container">
      <InputBase class="body-input" 
                 placeholder="Найти сотрудника"
                 v-model="title" />
    </div>
    <div class="employes container">
      <div class="employe-item" @click="router.push({name: 'person', params: {id: item.id} })"
           v-for="item in instance" 
           :key="item.id">
        <div class="employe-title">
          <div class="employe-name">{{ item.name }}</div>
          <div class="employe-id">{{ item.id }}</div>
        </div>
        <div class="employe-row">
          <div class="row-el">
            <span>Адрес: </span> 
            <img src="../assets/location.svg" alt="location" class="row-img">
            {{ item.address.city }} {{ item.address.city }}
          </div>
          <div class="row-el">
            <b>{{ item.email }}</b>
          </div>
          <div class="row-el">
            {{ item.username }}
          </div>
        </div>
        <div class="employe-company">
            <div class="row-el">{{ item.company.name }}</div>
            <RouterLink :to="{name: 'person', params: {id: item.id} }" class="row-el">{{ item.website }}</RouterLink>
         </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import InputBase from "../components/InputBase.vue";
import axios from "axios";
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router"
import router from "../router/index"

const title = ref("");
const instance = ref([]);
const getInstance = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => (instance.value = res.data))
    .catch((error) => console.log(error));
};
onMounted(() => getInstance());
</script>
<style scopped lang="scss">

.employes {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: stretch;
  color: #d9d9d9;
}
.employe-item {
  flex: 100%;
  justify-content: stretch;
  padding: 20px;
  background: #333;
  border-radius: 20px;
}

.employe-title {
  justify-content: space-between;
  font-weight: 600;
  font-size: 20px;
}

.employe-row {
  margin-top: 10px;
}

.employe-title,
.employe-row, .employe-company {
  display: flex;
  align-items: end;
  flex-wrap: nowrap;
  margin-bottom: 20px;

  .row-el {
    padding-right: 10px;
    border-right: 2px solid #808080;
    margin-right: 10px;

    &:last-child {
        border: none;
    }
  } 

  span {
    color: #808080;
    margin-right: 10px;
  }

  .row-img {
    width: 12px;
  }
}

.employe-company {
    justify-content: space-between;

    .row-el {
        border: none;
    }

    a {
        color: #4ea8de;
        font-weight: 600;
    }
}

.employe-name {
  color: #5e60ce;
}
.employe-id {
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffff;
  background: #4ea8de;
  border-radius: 50px;
  font-size: 12pt;
}
</style>
