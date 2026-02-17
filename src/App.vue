<script setup>
    import { ref } from 'vue';
    import { ref, computed } from 'vue';

    let items = ref(['Sai', 'Piim', 'Viin', 'Ma', 'Tahan', 'Magada'])
    let i = 1;
    let itemss = ref(
        [
            {id: i++, text: 'Piim', is_done: false},
            {id: i++, text: 'Sai', is_done: true},
            {id: i++, text: 'Viin', is_done: true},
            {id: i++, text: 'Ma', is_done: false},
            {id: i++, text: 'Tahan', is_done: false},
            {id: i++, text: 'Magada',is_done: false},
          ]);
    let new_item = ref('')

    function add_shi()
    {
      if (new_item.value.trim())
      {
        items.value.push(new_item.value);
        new_item.value = ''
        items.value.push( {id: i++, text: new_item.value, is_done: false});
        new_item.value = '';
      }
    }

    let done_items = computed(() => {return items.value.filter(i => i.is_done)});
  </script>

  <template>
    @@ -21,7 +32,7 @@
    <input class="input" type="text" v-model="new_item" @keypress.enter="add_shi">
    <div class="control">
      <button class="button is-info" @click="add_shi"></button>
        <button class="button is-primary" @click="add_shi">
          Add shit
        </button>
    </div>
    @@ -30,11 +41,24 @@
    <div class="content">
      <h1>All items</h1>
      <ul>
        <li v-for="item in items">{{ item }}</li>
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
</template>