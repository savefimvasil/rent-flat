<template>
  <div>
    <div class="container">
      <FlatList/>
    </div>
  </div>
</template>

<script>
  import FlatList from '../../../components/Admin/FlatList.vue'
  export default {
    name: "news",
    layout: 'admin',
    components: {
      FlatList
    }
  }
</script>

<style scoped>
</style>
