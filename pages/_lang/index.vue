<template>
  <div class="index--page">
    <Main/>
    <FlatsList
      class="container"
      :flats="flats"
      title="Популярные предложения"
    />
  </div>
</template>

<script>
  import Main from '~/components/Main/Main'
  import FlatsList from '~/components/FlatsList/FlatsList'
export default {
  components: {
    Main,
    FlatsList
  },
  data () {
    return {
      flats: null
    }
  },
  async created() {
    await this.$store.dispatch('flats/getAllFlatsFromApi')
    this.flats = this.$store.state.ammo
  }
}
</script>

<style lang="scss">
  *{
    font-family: 'Open Sans', sans-serif;
  }
</style>

