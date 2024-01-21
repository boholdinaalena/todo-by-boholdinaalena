<template>
  <div class="wrapper">
    <div class="header">
      <img src="./assets/rocket.svg" />

      <div><span class="header-logo">TO</span>DO</div>
    </div>
    <div class="body container">
      <input
        class="body-input"
        type="text"
        placeholder="Добавить новую задачу"
      />
      <button class="body-btn">Создать</button>
    </div>

    <div class="todo container">
      <div class="todo-header">
        <div class="todo-count">
          Созданные задачи
          <div class="todo-num">10</div>
        </div>
        <div class="todo-amount">
          Завершенно
          <div class="todo-num">2 из 10</div>
        </div>
      </div>

      <div class="list">
        <div class="list-item" v-for="item in 10">
          <div class="list-info">
            <div class="item-round"></div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit maiores architecto dolores? {{ item }}
          </div>
          <img class="item-img" src="./assets/trash.svg" alt="trash">
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

.header-logo {
  color: #4ea8de;
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
  background: #1e6f9f;
  border-radius: 8px;
  padding: 16px;
  color: #fff;
  font-weight: 700;
  line-height: 140%;
}

.todo-header {
  display: flex;
  justify-content: space-between;
  color: #5e60ce;
}

.todo-count,
.todo-amount {
  display: flex;
  gap: 8px;
  font-weight: 700;
}

.todo-count {
  color: #4ea8de;
}

.todo-num {
  color: #d9d9d9;
  padding: 2px 8px;
  background: #333;
  border-radius: 999px;
}

.todo {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 3px solid #333;
  padding: 16px;
  background: #333;
  font-size: 12pt;
  color: #ffffff;
  cursor: pointer;

  &__icon {
    width: 17px;
  }
}

.list-info {
  gap: 12px;
  display: flex;
  justify-content: left;
}
.item-round {
  width: 18px;
  height: 18px;
  border: 2px solid #1e6f9f;
  border-radius: 999px;
}
.item-img {
  justify-content: end;
}
</style>
