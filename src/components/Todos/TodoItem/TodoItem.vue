<template>
  <div :class="['z-1', 'p-r', 'cubic-bezier', 'todo', {'todo-destroy': destroyHover}]">
    <!-- container for the completed button -->
    <div class="p-a complete-ctn">
      <div :class="['circle', 'p-r', 'center', 'cubic-bezier-color',
      'c-p', 'check-circle', {'check-circle-active': data.done}]"
      @mouseover="hoverComplete = true" @mouseleave="hoverComplete = false"
      @click="handleDone">
        <i :class="['material-icons', 'center', 'cubic-bezier-color', 'checkmark', {'checkmark-active': data.done}]">
          &#xE876;
        </i>
      </div>
    </div>
    <!-- destroy todo button -->
    <i class="material-icons p-a cubic-bezier c-p destroy"
    @mouseover="destroyHover = true" @mouseleave="destroyHover = false"
    @click="handleDestroy">
      &#xE15D;
    </i>
    <!-- todo description -->
    <div :class="['bold', 'c-p', 'cubic-bezier', 'text', {'text-done': data.done}]"
    @click="edit = true">
      {{this.data.description}}
    </div>
    <!-- edit modal -->
    <transition name="fade">
      <edit-todo v-if="edit"
      :edit="edit" :closeEdit="closeEdit"
      :description="data.description"
      :updateDescription="updateDescription">
      </edit-todo>
    </transition>

  </div>
</template>

<script src="./TodoItem.js"></script>

<style scoped>
  .todo {
    padding: 24px 24px 24px 75px;
    background: white;
    borderRadius: 3px;
    fontFamily: 'aileronthin';
    fontSize: 1.1em;
    margin: 12px 0px;
    border-radius: 2px;
    word-wrap: break-word;
  }
  .todo-destroy {
    background: #FFEBEE;
  }
  .complete-ctn {
    left: 8px;
    top: 0px;
    width: 50px;
    height: 100%;
  }
  .check-circle {
    border: 1px solid rgba(0,0,0, 0.15);
    width: 40px;
    height: 40px;
  }
  .check-circle-active {
    border-color: #43cea2;
  }
  .checkmark {
    font-size: 1.7em;
    color: rgba(0,0,0,0);
  }
  .checkmark:hover {
    color: rgba(0,0,0,0.2);
  }
  .checkmark-active, .checkmark-active:hover {
    color: #43cea2;
  }
  .destroy {
    color: rgba(0,0,0,0.1);
    bottom: 5px;
    right: 5px;
  }
  .destroy:hover {
    color: #F44336;
  }
  .text {
    color: #333;
  }
  .text:hover {
    color: #2196F3;
  }
  .text-done {
    color: rgba(0,0,0,0.4);
    text-decoration: line-through;
  }
</style>
