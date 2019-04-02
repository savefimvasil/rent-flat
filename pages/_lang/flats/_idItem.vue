<template>
    <div class="news--item">
      <div class="container">
        <h1>
          {{
            $route.params.lang === 'ru' ?
            ad.titleRU :
            $route.params.lang === 'ua' ?
            ad.titleUA :
            ad.titleRU
          }}
        </h1>
        <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/801/80176477.jpg" alt="">
        <p>
          {{
            $route.params.lang === 'ru' ?
            ad.postBodyRU :
            $route.params.lang === 'ua' ?
            ad.postBodyUA :
            ad.postBodyRU
          }}
        </p>
        <FlatList
          :flats="ammo"
          title="Еще для Вас"
          :template="template"
          :sort="sort"
        />
      </div>
    </div>
</template>

<script>
    import FlatList from '../../../components/FlatsList/FlatsList'

    export default {
      name: "idItem",
      props: ['pageData'],
      components: {
        FlatList
      },
      data() {
        return{
          ad: {},
          query: undefined,
          firstLoad: false,
          template: '',
          sort: '',
          ammo: undefined,
          id: undefined
        }
      },
      methods: {
        async getAds(){
          if(this.$route.query.parentId) {
            this.query = this.$route.query.parentId
          } else this.query = undefined
          await this.$store.dispatch('flats/getAllFlatsById', this.$route.query.parentId)
          this.ammo = this.$store.state.ammo
          this.firstLoad = true
        },
        async getTemplate() {
          let id = this.$route.query.parentId
          await this.$store.dispatch('flats/getTemplateName', this.id)
          this.sort = this.$store.state.sort
          this.template = this.$store.state.template
        }
      },
      async created() {
        this.getAds()
        this.getTemplate()
      },
      async mounted() {
        let id = this.$route.params.idItem
        await this.$store.dispatch('flats/getFlatById', id)
        this.ad = this.$store.state.ad
        this.id = this.ad._id
      }
    }
</script>

<style lang="scss" scoped>
  .news--item{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 100px;
      h1{
        text-align: center;
      }
      img{
        max-width: 700px;
      }
    }
  }
</style>
