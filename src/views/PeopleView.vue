<template>
  <div class="person container">
    <div class="person-item">
      <div class="person-title">
        <div class="person-name">{{ person.name }}</div>
        <div class="person-id">{{ person.id }}</div>
      </div>
      <div class="person-row">
        <div class="row-el">
          <span>Адрес: </span>
          <img src="../assets/location.svg" alt="location" class="row-img" />
        </div>
        <div class="row-el">
          <b>{{ person.email }}</b>
        </div>
        <div class="row-el">
          {{ person.username }}
        </div>
      </div>
      <div class="person-company">
        <div class="row-el">{{ person.phone }}</div>
        <a class="row-el">{{ person.website }}</a>
      </div>
    </div>
  </div>
</template>
<script setup>
import userAPI from "../app/api/userAPI.js";
import { ref, onMounted } from "vue";

const id = 3;
const person = ref([]);

const loadUser = async () => {
  try {
    const responce = await userAPI.getUser(id);
    person.value = responce.data;
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => loadUser());
</script>

<style scopped lang="scss">
.person {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: stretch;
  color: #d9d9d9;

  &-item {
    margin-top: 50px;
    flex: 100%;
    justify-content: stretch;
    padding: 20px;
    background: #333;
    border-radius: 20px;
  }

  &-title {
    justify-content: space-between;
    font-weight: 600;
    font-size: 20px;
  }

  &-row {
    margin-top: 10px;
  }

  &-title,
  &-row,
  &-company {
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

  &-company {
    justify-content: space-between;

    .row-el {
      border: none;
    }

    a {
      color: #4ea8de;
      font-weight: 600;
    }
  }

  &-name {
    color: #5e60ce;
  }
  &-id {
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
}
</style>
