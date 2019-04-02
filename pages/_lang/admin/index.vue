<template>
  <div class="admin">
    <div class="container">
    </div>
  </div>
</template>

<script>
  import AdminNews from '../../../components/Admin/FlatList'

  export default {
    name: "admin",
    components: {
      AdminNews
    },
    layout: 'admin',
    data(){
      return {
        selectedCategory: ''
      }
    },
    methods: {
      selectCategory(val) {
        this.selectedCategory = val
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>

