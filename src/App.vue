<script setup>
import { ref, computed } from 'vue';
import { ref } from 'vue';
import Modal from './components/Modal.vue';

let i = 1;
let items = ref(
    [
      {id: i++, text: 'Piim', is_done: false},
      {id: i++, text: 'Sai', is_done: true},
      {id: i++, text: 'Viin', is_done: true},
      {id: i++, text: 'Ma', is_done: false},
      {id: i++, text: 'Tahan', is_done: false},
      {id: i++, text: 'Magada',is_done: false},
    ]);
let new_item = ref('')
let modal1Active = ref(false);

function add_shi()
{
  if (new_item.value.trim())
  {
    items.value.push( {id: i++, text: new_item.value, is_done: false});
    new_item.value = '';
  }
}

let done_items = computed(() => {return items.value.filter(i => i.is_done)});
</script>

<template>
  <div class="container">
    <div class="field has-addons mt-3">
      <div class="control is-expanded">
        <input class="input" type="text" v-model="new_item" @keypress.enter="add_shi">
      </div>
      <div class="control">
        <button class="button is-primary" @click="add_shi">
          Add shit
        </button>
      </div>
    </div>
    <button class="button is-primary" @click="modal1Active=true">Open Modal</button>

    <div class="content">
      <h1>All items</h1>
      <ul>
        <li v-for="item in items">
          {{ item.text }}
          <input type="checkbox" v-model="item.is_done">
        </li>
      </ul>
    </div>

    <div class="content">
      <h1>Done items</h1>
      <ul>
        <li v-for="done in done_items">
          {{ done.text }}
          <input type="checkbox" v-model="done.is_done">
        </li>
      </ul>
    </div>
    <Modal :active="modal1Active" @close="modal1Active=false"></Modal>
  </div>
</template>

<style>

</style>
<style></style>