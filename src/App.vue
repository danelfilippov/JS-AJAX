<script setup>
import { ref } from 'vue';
import Tabs from './components/Tabs.vue';

let titles = ref([
  'Pictures',
  'Movies',
  'Dark souls',
  'Git Gud',
]);
let active_tab = ref(0);
import RouterTabs from './components/RouterTabs.vue';

</script>

<template>
  <Tabs :titles="titles" :active="active_tab"></Tabs>
  <div class="container">

  </div>
  <RouterTabs></RouterTabs>
  <RouterView></RouterView>
</template>