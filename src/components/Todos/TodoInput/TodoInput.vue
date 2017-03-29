<template>
  <div class="p-r f-w">
    <input autofocus type="text"
      v-on:keydown.enter.prevent='handleSubmit'
      id="todo-input" v-bind:style="todoInput" class="f-w"
      placeholder="What do you need to do?" v-model="value">
    <transition name="fade">
      <div v-if="value.length > 0" class="p-a center-r c-p z-1 cubic-bezier"
        v-bind:style="addBtn" @click="handleSubmit">
        <i class="material-icons center" style="color: white;">&#xE145;</i>
      </div>
    </transition>
  </div>
</template>

<script src="./TodoInput.js"></script>
