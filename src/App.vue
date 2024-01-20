<template>
  <div class="wrapper">
    <div class="header">
      <img src="./assets/rocket.svg">

      <div>
        <span>TO</span>DO
      </div>
    </div>
    <div class="body container">
      <input class="body-input" type="text">
      <button class="body-btn">Criar</button>
    </div>

    <div class="todo container">
      <div class="todo-header">
        <div class="todo-count">Tarefas criadas</div>
        <div class="todo-amount">Tarefas criadas</div>
      </div>

      <div class="list">
        <div class="list-item" v-for="item in 40">
          <div>+</div>
          item {{ item }}
        </div>
      </div>


    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 736px;
  margin: 0 auto;
}

.header {
  background: #0D0D0D;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: #5E60CE;
  font-size: 40px;
  font-weight: 900;
  padding: 72px 0;

  span {
    color: #4EA8DE;
  }
}

.body {
  display: flex;
  align-items: stretch;
  gap: 8px;
  transform: translateY(-50%);
}

.body-input {
  flex: 1;
  background: #262626;
  padding: 16px;
  color: #808080;
  border-radius: 10px;
  border: none;

}

.body-btn {
  background: #1E6F9F;
  color: #fff;
}

.todo-header {
  display: flex;
  justify-content: space-between;
}

.todo {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.list {

  overflow: scroll;
}

.list-item {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>