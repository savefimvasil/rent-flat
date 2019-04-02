<template>
  <div class="news-page">
    <div class="container">
      <div class="row">
        <FlatList
          :flats="ammo"
          title="Все обеды"
          :template="template"
          :sort="sort"
        />
      </div>
      </div>
  </div>
</template>

<script>
  import FlatList from '../../../components/FlatsList/FlatsList'
  import axios from 'axios'

  export default {
    name: "news",
    components: {
      FlatList
    },
    data() {
      return{
        query: undefined,
        firstLoad: false,
        template: '',
        sort: '',
        ammo: undefined
      }
    },
    methods: {
      async getAds(){
        if(this.$route.query.parentId) {
          this.query = this.$route.query.parentId
        } else this.query = undefined
        await this.$store.dispatch('flats/getAllFlatsById', this.query)
        this.ammo = this.$store.state.ammo
        this.firstLoad = true
      },
      async getTemplate() {
        let id = this.$route.query.parentId
        await this.$store.dispatch('flats/getTemplateName', id)
        this.sort = this.$store.state.sort
        this.template = this.$store.state.template
      }
    },
    async mounted() {
      this.getAds()
      this.getTemplate()
    },
    watch: {
      '$route' (to, from) {
        this.getAds()
        this.getTemplate()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .news-page{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .container{
      padding-top: 50px;
      h1{
        text-align: center;
      }
    }
  }
</style>
