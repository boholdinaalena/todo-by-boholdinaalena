<template>
  <div>
    <div class="header">
      <div class="header-nav">
        <RouterLink class="nav-link" to="/">Задачи</RouterLink>|
        <RouterLink class="nav-link" to="/people">Пользователь</RouterLink>
      </div>
      <img class="header-img" src="./assets/rocket.svg" />
      <div><span class="header-logo">TO</span>DO</div>
    </div>
    <RouterView v-slot="{ Component, route }">
      <transition
        :enter-active-class="route.meta.enterClass"
        :leave-active-class="route.meta.leaveClass"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>
<script setup>
import { RouterView, RouterLink } from "vue-router"
import HomeView from "./views/HomeView.vue";
import PeopleView from "./views/PeopleView.vue";
</script>
<style lang="scss" scoped>
.animate__animated {
  --animate-duration: 0.6s;
}
.header {
  background: #0d0d0d;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: #5e60ce;
  font-size: 40px;
  font-weight: 900;
  padding: 72px 0;
}

.header-nav {
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 15px 0;
  color: #808080;
  font-weight: 400;
  font-size: 16pt;
}

.router-link-active {
  color: #ffffff;
}
.header-logo {
  color: #4ea8de;
}
.container {
  max-width: 736px;
  margin: 0 auto;
}

</style>