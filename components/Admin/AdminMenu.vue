<template>
    <div class="admin">
      <div class="container">
        <h1>Админ панель</h1>
        <div class="admin-menu">
          <nuxt-link :to="'/' + $i18n.locale + '/admin/flats'" @click="selectCategory('news')" :class="selectedCategory === 'news' ? 'selected': ''">Каталог обедов</nuxt-link>
        </div>
        <hr>
      </div>
    </div>
</template>

<script>
  export default {
    name: "AdminMenu",
    data () {
      return {
        selectedCategory: ''
      }
    },
    methods: {
      selectCategory (val) {
        this.selectedCategory = val
      }
    }
  }
</script>

<style lang="scss" scoped>
  $trolleyGray: #7C7C7C;
  $roseTaupe: #8B635C;
  $ghostWhite: #F7F9F9;
  .admin{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .container{
      padding-top: 80px;
      h1{
        text-align: center;
        color: $trolleyGray;
      }
      p{
        margin-top: 50px;
      }
      .admin-menu{
        width: 100%;
        display: flex;
        a{
          background: #fff;
          border: 1px solid $trolleyGray;
          border-radius: 5px;
          padding: 0 20px;
          color: $trolleyGray;
          transition: .3s;
          font-size: 24px;
          text-align: center;
          text-transform: uppercase;
          &:hover{
            color: #fff;
            background: $trolleyGray;
            text-decoration: none;
          }
          &:focus{
            color: #fff;
            background: $trolleyGray;
            outline: none;
          }
          &.nuxt-link-exact-active, &.nuxt-link-active{
            color: #fff;
            background: $trolleyGray;
          }
        }
      }
    }
  }
</style>
