<script setup>
import { ref } from 'vue';
import axios from 'axios';

let joke = ref('')

const req = fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json())
    .then(data => joke.value = data.value);
const res = await axios.get("https://api.chucknorris.io/jokes/random")
joke.value = res.data.value
</script>

<template>
  <div class="container content">
    <h1>{{ joke }}</h1>
  </div>
</template>