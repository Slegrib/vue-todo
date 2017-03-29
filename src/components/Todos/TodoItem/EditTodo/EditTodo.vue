<template>
  <div class="p-f t l r b"
    style="z-index: 10000;" @click="closeEdit">
    <div class="p-f t l r b endless-river" data-removeedit="true" style="z-index: 1000;">

      <i class="material-icons p-a c-p" data-removeedit="true"
        style="top: 12px; right: 12px; color: white; font-size: 2em;">&#xE14C;</i>

      <div class="center" style="top: 30%; width = 500px;">
        <div class="t-a-c p-r" style="color: white; height: 150px;">
          <transition-group name="fade">
            <div key="edit" v-if="value === originalValue || value === ''" class="d-i-b center" style="padding: 8px;">
              <i class="material-icons" style="font-size: 3em;">&#xE254;</i>
            </div>
            <div key="send" v-if="value !== originalValue && value !== ''"
              @click="attemptUpdate"
              class="d-i-b z-1 center c-p" style="padding: 8px; background: #43cea2;">
              <i class="material-icons" style="font-size: 3em;">&#xE163;</i>
            </div>
          </transition-group>
        </div>
        <div class="f-w p-r">
          <textarea ref="textarea" rows="1" id="edit-textarea" v-model="value"
            v-on:keydown.enter.prevent='attemptUpdate'></textarea>
        </div>
        <div>
      </div>

    </div>
  </div>
</template>

<script src="./EditTodo.js"></script>
