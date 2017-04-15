<template>
  <transition name="fade">
    <div v-if="loading" style="background: rgba(24, 90, 157, 1); z-index: 1000; position:fixed; width: 100%; height: 100%; top: 0px; left: 0px;">

    </div>
  </transition>
</template>

<script src="./LoadingScreen.js"></script>
