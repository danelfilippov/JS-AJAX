@@ -1,18 +1,20 @@
<script setup>
import { ref } from 'vue';
import Modal from './components/Modal.vue';

let modal1Active = ref(false);
import Tabs from './components/Tabs.vue';

let titles = ref([
  'Pictures',
  'Movies',
  'Dark souls',
  'Git Gud',
]);
let active_tab = ref(0);

</script>

<template>
  <Tabs :titles="titles" :active="active_tab"></Tabs>
  <div class="container">
    <button class="button is-primary" @click="modal1Active=true">Open Modal</button>

    <Modal :active="modal1Active" @close="modal1Active=false"></Modal>

  </div>
</template>

<style></style>
