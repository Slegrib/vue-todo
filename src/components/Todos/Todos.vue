<template>
  <div>
    <div class="container" style="max-width: 624px; padding: 24px;">
      <div class="row">
        <h1 id="todo-header" class="light-font t-a-c" > todos </h1>
        <todo-input></todo-input>
        <transition-group name="todo">
          <div style="margin-top: 24px;" v-for="(todo, index) in todos" v-bind:key="todo">
            <todo-item v-bind:data="todo" v-bind:index="index"></todo-item>
          </div>
        </transition-group>
      </div>
      <div style="height: 300px;"></div>
    </div>
  </div>
</template>

<script src="./Todos.js"></script>
