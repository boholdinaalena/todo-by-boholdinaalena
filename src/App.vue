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
        <div class="user-add__btn btn">
          Добавить
          <img src="../src/assets/img/add.png" alt="add" class="btn__icon" />
        </div>
      </div>
    </div>
    <div class="body">
      <div class="body__info">
        <div id="created" class="value">
          <div class="value__text">Созданные задачи</div>
          <div class="value__num">5</div>
        </div>
        <div id="completed" class="value">
          <div class="value__text value__text__completed">Выполнено</div>
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
          <div class="task__texxt task__text__strikeout">Целое число - это промежуточная масса либеро, ауктор, который не терпит отлагательств. Я очень хорошо знаю целое число.</div>
          <img
            src="../src/assets/img/trash.png"
            alt="delete"
            class="task__icon"
          />
        </div>
        <div class="task">
          <input type="checkbox" class="task__input" />
          <div class="task__text task__text__strikeout">Целое число - это промежуточная масса либеро, ауктор, который не терпит отлагательств. Я очень хорошо знаю целое число.</div>
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

<style lang="scss" scoped>
@font-face {
  font-family: "Inter";
  src: url(../src/assets/fonts/Inter-4.0/Inter.ttc) format("truetype");
}
$mainColor: #1e6f9f;
$secondColor: #262626;
$bgColor: #191919;
$headerColor: #0d0d0d;
$stroke: #333333;
$colorComleted: #8284fa;
$width: 50%;
$widthMob: 90%;
$radius: 0.8vw;
$radiusMob: 2vw;

.vue {
  font-family: Inter;
  background: $secondColor;
}
.header {
  height: 13vw;
  background: $headerColor;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  .header__add {
    position: absolute;
    display: block;
    z-index: 1;
    top: 11vw;
  }
}

.user-add {
  width: $width;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1vw;

  .user-add__input {
    width: 38.5vw;
    float: left;
    border-radius: $radius;
    border: none;
    height: 3.5vw;
    background: $secondColor;
    box-shadow: 0 0 0 0.08vw $headerColor;
    color: #ffffff;
    padding-left: 1vw;
  }
  .user-add__btn {
    display: inline-flex;
    float: right;
    height: 3.7vw;
    width: 9vw;
  }
}

.body {
  margin-top: 5vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;

  .body__info {
    width: $width;
  }
  #created {
    float: left;
  }
  #completed {
    float: right;
  }

  .body__tasks {
    width: $width;
    margin-top: 1vw;
  }
}

.title {
  .title__logo {
    width: 6%;
    padding-right: 3%;
    margin-bottom: -0.4vw;
  }
  .title__text {
    width: 24%;
  }
}

.btn {
  background: $mainColor;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9vw;
  color: #ffffff;
  border-radius: $radius;

  .btn__icon {
    width: 13%;
    margin-left: 0.5vw;
  }
}

.value {
  display: flex;
  font-weight: bold;
  font-size: 0.9vw;

  .value__text {
    color: $mainColor;
    margin-right: 0.6vw;
    margin-top: 0.3vw;
  }

  .value__text__completed {
    color: $colorComleted;
  }
  .value__num {
    padding: 0.7vw;
    padding-top: 0.2vw;
    padding-bottom: 0.2vw;
    color: #ffffff;
    background: $stroke;
    border-radius: $radius;
  }
}

.task {
  margin-bottom: 1vw;
  display: flex;
  font-size: 0.8vw;
  background: $secondColor;
  border-radius: $radius;
  color: #ffffff;
  padding: 1.5vw;
  box-shadow: 0 0 0 0.08vw $stroke;

  .task__input {
    width: 1.7vw;
    height: 1.4vw;
    margin-top: -0.3vw;
    margin-right: 1vw;
    margin-left: -0.3vw;
    background-color: $secondColor;
    border-radius: 100vw;
    vertical-align: middle;
    border: 0.15vw solid $mainColor;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
  }

  .task__input:checked {
    background: url(../src/assets/img/check.png);
    background-position: center;
    background-size: 2vw;
    border-color: $colorComleted;
}
  .task__icon {
    height: 0.9vw;
    width: 0.95vw;
    margin-left: 1vw;
  }

  .task__text__strikeout {
    text-decoration:line-through;
    color: #808080;
  }
}

</style>
