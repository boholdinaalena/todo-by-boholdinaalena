<script setup lang="ts"></script>

<template>
  <div class="vue">
    <div class="header">
      <div class="header__title">
        <div class="title">
          <img
            src="../src/assets/img/logo.png"
            alt="todo"
            class="title__logo"
          />
          <img
            src="../src/assets/img/todo.png"
            alt="logo"
            class="title__text"
          />
        </div>
      </div>
      <div class="header__add user-add">
        <input
          type="text"
          class="user-add__input"
          placeholder="Добавить новую задачу"
        />
        <button class="user-add__btn btn">
          Добавить
          <img src="../src/assets/img/add.png" alt="add" class="btn__icon" />
        </button>
      </div>
    </div>
    <div class="body">
      <div class="body__info">
        <div id="created" class="value">
          <div class="value__text">Созданные задачи</div>
          <div class="value__num">5</div>
        </div>
        <div id="completed" class="value">
          <div class="value__text completed">Выполнено</div>
          <div class="value__num">2 из 5</div>
        </div>
      </div>
      <div class="body__tasks">
        <div class="task">
          <input type="checkbox" class="task__input" />
          <div class="task__text">Целое число - это промежуточная масса либеро, ауктор, который не терпит отлагательств. Я очень хорошо знаю целое число.</div>
          <img
            src="../src/assets/img/trash.png"
            alt="delete"
            class="task__icon"
          />
        </div>
        <div class="task">
          <input type="checkbox" class="task__input" />
          <div class="task__text">Целое число - это промежуточная масса либеро, ауктор, который не терпит отлагательств. Я очень хорошо знаю целое число.</div>
          <img
            src="../src/assets/img/trash.png"
            alt="delete"
            class="task__icon"
          />
        </div>
        <div class="task">
          <input type="checkbox" class="task__input" />
          <div class="task__text">Целое число - это промежуточная масса либеро, ауктор, который не терпит отлагательств. Я очень хорошо знаю целое число.</div>
          <img src="../src/assets/img/trash.png" alt="" class="task__icon" />
        </div>
        <div class="task">
          <input type="checkbox" class="task__input" />
          <div class="task__text">Целое число - это промежуточная масса либеро, ауктор, который не терпит отлагательств. Я очень хорошо знаю целое число.</div>
          <img
            src="../src/assets/img/trash.png"
            alt="delete"
            class="task__icon"
          />
        </div>
        <div class="task">
          <input type="checkbox" class="task__input" />
          <div class="task__text-strikeout">Целое число - это промежуточная масса либеро, ауктор, который не терпит отлагательств. Я очень хорошо знаю целое число.</div>
          <img
            src="../src/assets/img/trash.png"
            alt="delete"
            class="task__icon"
          />
        </div>
        <div class="task">
          <input type="checkbox" class="task__input" />
          <div class="task__text-strikeout">Целое число - это промежуточная масса либеро, ауктор, который не терпит отлагательств. Я очень хорошо знаю целое число.</div>
          <img
            src="../src/assets/img/trash.png"
            alt="delete"
            class="task__icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

:root {
  --main-bg-color: #191919;
  --header-color: #0d0d0d;
  --accent-color: #1e6f9f;
  --check-color: #8284fa;

  --width: 900px;
  --radius: 10px;
}

@font-face {
  font-family: "Inter";
  src: url(../src/assets/fonts/Inter-4.0/Inter.ttc) format("truetype");
}
.vue {
  font-family: Inter;
  background: var(--main-bg-color);
  font-size: 16pt;
}

.header {
  height: 200px;
  background: var(--header-color);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__add {
    position: absolute;
    display: block;
    z-index: 1;
    top: 170px;
  }
}

.user-add {
  width: var(--width);
  display: flex;
  justify-content: space-between;
  font-size: 12pt;

  &__input {
    width: 733px;
    padding-left: 15px;
    border-radius: var(--radius);
    border: none;
    height: 52px;
    background: #262626;
    box-shadow: 0 0 0 1px var(--header-color);
    color: #ffffff;
  }
  &__btn {
    display: flex;
    height: 52px;
    width: 140px;
  }
}

.body {
  margin-top: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;

  &__info {
    width: var(--width);
    display: flex;
    justify-content: space-between;
  }

  &__tasks {
    width: var(--width);
    margin-top: 30px;
  }
}

.title {
  &__logo {
    width: 25px;
    padding-right: 15px;
    margin-bottom: -10px;
  }
  &__text {
    width: 100px;
  }
}

.btn {
  background: var(--accent-color);
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
  font-weight: bold;
  font-size: 16px;

  &__text {
    color: var(--accent-color);
    margin-right: 10px;
    margin-top: 5px;

    &.completed {
      color: var(--check-color);
    }
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
