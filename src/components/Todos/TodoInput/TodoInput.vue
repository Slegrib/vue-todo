<template>
  <div class="p-r f-w">
    <input autofocus type="text" @keydown.enter.prevent="handleSubmit"
    id="todo-input" class="f-w" placeholder="What do you need to do?"
    v-model="value">

    <transition name="fade">
      <div v-if="value.length > 0" @click="handleSubmit"
      class="p-a center-r c-p z-1 cubic-bezier add-btn">
        <i class="material-icons center white">&#xE145;</i>
      </div>
    </transition>

  </div>
</template>

<script src="./TodoInput.js"></script>

<style scoped>
  #todo-input {
    background: none;
    border: none;
    border-bottom: 1px solid rgba(255,255,255, 0.60);
    height: 40px;
    color: white;
    font-size: 1.5em;
    font-family: 'aileronthin';
    paddingRight: 36px;
  }
  #todo-input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: rgba(255,255,255, 0.4);
  }
  #todo-input::-moz-placeholder { /* Firefox 19+ */
    color: rgba(255,255,255, 0.4);
  }
  #todo-input:-ms-input-placeholder { /* IE 10+ */
    color: rgba(255,255,255, 0.4);
  }
  #todo-input:-moz-placeholder { /* Firefox 18- */
    color: rgba(255,255,255, 0.4);
  }
  .add-btn {
    width: 25px;
    height: 25px;
    background: #43cea2;
  }
</style>
