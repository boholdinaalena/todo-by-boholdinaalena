<template>
  <div>
    <div class="persons container">
      <div class="person-item">
        <div class="person-title">
          <div class="person-name">{{ person.name }}</div>
          <div class="person-id">{{ person.id }}</div>
        </div>
        <div class="person-row">
          <div class="row-el">
            <span>Адрес: </span> 
            <img src="../assets/location.svg" alt="location" class="row-img">
          </div>
          <div class="row-el">
            <b>{{ person.email }}</b>
          </div>
          <div class="row-el">
            {{ person.username }}
          </div>
        </div>
        <div class="person-company">
            <!-- <div class="row-el">{{ person.company.name }}</div> -->
            <a class="row-el">{{ person.website }}</a>
         </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import instance from '../app/api/instance.js';
import { ref, onMounted } from 'vue';

const person = ref([])

const loadUsers = async () => {
  instance
  .get("https://jsonplaceholder.typicode.com/users/1")
  .then(result => {
  person.value = result.data;
})
}

onMounted(() => {
  loadUsers()
})
</script>
<style scopped lang="scss">

.persons {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: stretch;
  color: #d9d9d9;
}
.person-item {
  flex: 100%;
  justify-content: stretch;
  padding: 20px;
  background: #333;
  border-radius: 20px;
}

.person-title {
  justify-content: space-between;
  font-weight: 600;
  font-size: 20px;
}

.person-row {
  margin-top: 10px;
}

.person-title,
.person-row, .person-company {
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

.person-company {
    justify-content: space-between;

    .row-el {
        border: none;
    }

    a {
        color: #4ea8de;
        font-weight: 600;
    }
}

.person-name {
  color: #5e60ce;
}
.person-id {
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