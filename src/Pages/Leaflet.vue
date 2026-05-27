<script setup>
import { ref } from 'vue'
import LeafletMap from '../components/LeafletMap.vue'

let center = ref([59.42695235928513, 24.74360317137484])
let zoom = ref(18)
let marker = ref([59.42695235928513, 24.74360317137484])

</script>

<template>
  <button class="is-primary button" @click="
        center = [-10.246906785278114, -54.99352489937641];
        marker = [-10.246906785278114, -54.99352489937641]">
    Go to Brazil
  </button>
  <LeafletMap :center="center" :zoom="zoom" :marker="marker"></LeafletMap>
</template>