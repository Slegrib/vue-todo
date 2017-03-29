<template>
  <div class="z-1 p-r cubic-bezier" v-bind:style="ctn">
    <div class="p-a" style="width: 50px; height: 100%; background: rgba(0,0,0,0); left: 8px; top: 0px;">
      <div class="circle p-r center cubic-bezier-color c-p"
        @mouseover="hoverComplete = true" @mouseleave="hoverComplete = false"
        v-bind:style="checkCircle" @click="handleClick">
        <i class="material-icons center cubic-bezier-color" v-bind:style="checkmark">&#xE876;</i>
      </div>
    </div>
    <i class="material-icons p-a cubic-bezier c-p" v-bind:style="destroy"
      @mouseover="destroyHover = true" @mouseleave="destroyHover = false"
      data-destroy="true" @click="handleClick">&#xE15D;</i>

    <div class="bold c-p cubic-bezier"
      v-bind:style="text" @click="edit = true"
      @mouseover="textHover = true" @mouseleave="textHover = false">
      {{this.data.description}}
    </div>

    <transition name="fade">
      <edit-todo v-if="edit"
        v-bind:edit="edit" v-bind:closeEdit="closeEdit"
        v-bind:description="data.description"
        v-bind:updateDescription="updateDescription"> </edit-todo>
    </transition>

  </div>
</template>

<script src="./TodoItem.js"></script>
