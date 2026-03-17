<script setup>
defineProps(['active', 'titles']);
</script>

<template>
  <div class="tabs is-centered">
    <ul>
      <li v-for="(title, i) in titles" :class="{'is-active': i == active}"><a>{{title}}</a></li>
    </ul>
  </div>
</template>