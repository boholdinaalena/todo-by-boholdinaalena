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
  justify-content: center;
  font-weight: 600;
  font-size: 12pt;
  color: #ffffff;
  border-radius: var(--radius);
  border: none;
  cursor: pointer;

  &__icon {
    width: 17px;
    margin-left: 7px;
  }
}

.value {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

  &__num {
    padding: 14px;
    padding-top: 3px;
    padding-bottom:3px;
    color: #ffffff;
    background: #333333;
    border-radius: 15px;
  }
}

.task {
  margin-bottom: 20px;
  display: flex;
  font-size: 12pt;
  font-weight: 400;
  border-radius: var(--radius);
  color: #ffffff;
  padding: 25px;
  box-shadow: 0 0 0 2px #333333;

  &__input {
    width: 30px;
    height: 23px;
    margin-right:20px;
    border-radius: 100px;
    vertical-align: middle;
    border: 2.5px solid var(--accent-color);
    appearance: none;
    outline: none;
    cursor: pointer;
  }

  &__input:checked {
    background: url(../src/assets/img/check.png);
    background-position: center;
    background-size: 30px;
    border-color: #585ABD;
  }

  &__icon {
    height: 20px;
    width: 20px;
    margin-left: 60px;
  }

  &__text-strikeout {
    text-decoration: line-through;
    color: #808080;
  }
}
</style>