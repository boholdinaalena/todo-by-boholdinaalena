<template>
    <div class="body container person">
        <div class="person-name">
            {{ person.name }} 
            <img class="profile-img" src="../assets/profile.svg" alt="profile">
            <span>{{ person.username }}</span>
        </div>
        <!-- <div class="person-address">
            <span>Город:</span>{{ person.address.city}}
            <span>Улица:</span>{{ person.address.street}}
            <span>Номер:</span>{{ person.address.suite}}
            <span>Код:</span>{{ person.address.zipcode}}
        </div>
        <div class="person-phrase">
            "{{ person.company.catchPhrase }}"
        </div> -->
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import {ref, onMounted } from 'vue'
import axios from "axios";

const router = useRoute()
const {id} = router.params

const person = ref([]);
const getPerson = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => (person.value = res.data[id - 1]))
    .catch((error) => console.log(error));
};

onMounted(() => getPerson())

</script>
<style scopped lang="scss">

.person {
    transform: translateY(-50px);
    display: block;
    background: #333;
    padding: 10px;
    border-radius: 30px;
    line-height: 40px;
    margin-top: 90px;

    &-name {
        display: flex;
        justify-content: center;
        gap: 15px;
        font-weight: 700;
        font-size: 18pt;
        padding: 10px 0;

        span {
            color: #4ea8de;
        }

        .profile-img {
            width: 30px;
        }
    }

    &-email {
        display: flex;
        align-items: center;
        gap: 10px;

        img {
            width: 25px;
        }
    }

    &-address {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        span {
            color: #808080;
        }
    }

    &-phrase {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        font-size: 22pt;
    }
}
</style>