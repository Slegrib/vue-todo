<template>
  <div>
    <div class="container" style="max-width: 624px; padding: 24px;">
      <div class="row">
        <h1 id="todo-header" class="light-font t-a-c" > todos </h1>
        <todo-input></todo-input>
        <div id="todos-list">
          <transition-group name="todo" tag="ul">
            <li v-for="(todo, index) in todos" v-bind:key="todo">
              <todo-item v-bind:data="todo" v-bind:index="index"></todo-item>
            </li>
          </transition-group>
        </div>
      </div>
      <div id="bottom-padding"></div>
    </div>
  </div>
</template>

<script src="./Todos.js"></script>

<style scoped>
  #todo-header {
    font-size: 4em;
    color: rgba(255,255,255, 0.75);
    margin: 12px 0px 12px 0px;
    font-weight: 100;
  }
  #todos-list ul {
    display: block;
    list-style-type: none;
    padding: 0px;
  }
  #todos-list > ul li {
    margin-top: 24px;
  }
  #bottom-padding {
    height: 300px;
  }
</style>
