<script setup>

</script>

<template>
  <div class="tabs is-centered">
    <ul>
      <li class="is-active"><RouterLink to="/">ToDo</RouterLink></li>
      <li><RouterLink to="/modals">Modals</RouterLink></li>
      <li v-for="route in $router.getRoutes()" :class="{ 'is-active': route.path === $route.path }">
        <RouterLink :to="route.path">{{ route.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>