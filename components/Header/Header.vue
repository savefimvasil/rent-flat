<template>
    <div class="header">
      <div class="container">
        <nuxt-link class="title" to="/">Logo</nuxt-link>
        <div class="navigation">
          <button class="changeLang" @click="selectLang">{{$i18n.locale}}</button>
          <nuxt-link :to="'/' + $i18n.locale + '/flats'">Недвижимость</nuxt-link>
          <nuxt-link :to="'/' + $i18n.locale + '/admin'">Админпанель</nuxt-link>
        </div>
        <div class="burger-menu">
          <i
             :class="!isBurgerOpen ? 'fas fa-bars' : 'fas fa-times'"
             @click="isBurgerOpen = !isBurgerOpen"
          ></i>
          <div :class="!isBurgerOpen? 'burger-menu-list closed' : 'burger-menu-list open'">
            <nuxt-link :to="'/' + $i18n.locale + '/flats'">Недвижимость</nuxt-link>
            <nuxt-link :to="'/' + $i18n.locale + '/admin'">Админпанель</nuxt-link>
          </div>
          <div
            @click="isBurgerOpen = !isBurgerOpen"
            class="burger-menu-closer"
            v-if="isBurgerOpen"
          ></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Header",
      data () {
        return {
          isBurgerOpen: false
        }
      },
      methods: {
        selectLang() {
          if (this.$store.state.locale.locale === 'ru') {
            this.$store.commit('locale/SET_LANG', 'ua')
            this.$i18n.locale = 'ua'
            this.$route.params.lang = 'ua'
            let path = this.$route.path
            path = path.replace('ru', 'ua')
            this.$router.push(path)
          } else {
            this.$store.commit('locale/SET_LANG', 'ru')
            this.$i18n.locale = 'ru'
            this.$route.params.lang = 'ru'
            let path = this.$route.path
            path = path.replace('ua', 'ru')
            this.$router.push(path)
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
  $trolleyGray: #7C7C7C;
  $roseTaupe: #8B635C;
  $ghostWhite: #F7F9F9;

  .header{
  background: $trolleyGray;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  width: 100%;
    .container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    a.title{
      font-size: 24px;
      color: $ghostWhite;
      &:hover{
        text-decoration: none;
      }
    }
    img{
      width: 100px;
      height: 60px;
    }
    .navigation{
      height: 60px;
      display: flex;
      a{
        color: $ghostWhite;
        padding: 0 10px;
        border-bottom: 4px solid transparent;
        border-top: 4px solid transparent;
        line-height: 50px;
        text-transform: uppercase;
        /*font-weight: bold;*/
        font-weight: normal;
        transition: .2s;
        &:hover{
          text-decoration: none;
          border-bottom: 4px solid $ghostWhite;
          border-top: 4px solid transparent;
        }
      }
    }
    .burger-menu{
      color: $ghostWhite;
      &-list{
        position: fixed;
        background: #fff;
        display: flex;
        flex-direction: column;
        right: 0;
        top: 60px;
        width: 200px;
        height: 100vh;
        align-items: flex-end;
        transform: translateX(200px);
        transition: all .2s;
        &.closed{
          transform: translateX(200px);
        }
        &.open{
          transform: translateX(0);
        }
        a{
          padding: 10px 30px 0 0;
          color: $ghostWhite;
        }
      }
      &-closer{
        position: fixed;
        top: 60px;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(1,1,1,.5);
        z-index: -1000;
      }
    }
  }
}

  button.changeLang{
    padding: 0 15px;
    background: $trolleyGray;
    color: $ghostWhite;
    border: none;
    transition: all .2s;
    border-bottom: 4px solid transparent;
    border-top: 4px solid transparent;
    width: 50px;
    text-transform: uppercase;
    &:hover{
      text-decoration: none;
      border-bottom: 4px solid $ghostWhite;
      border-top: 4px solid transparent;
    }
    &:focus{
      outline: none;
    }
  }
@media (min-width: 768px) {
  .header{
    .container{
      .burger-menu{
        display: none;
      }
    }
  }
}

@media (max-width: 768px) {
  .header{
    .container{
      .navigation{
        display: none;
      }
    }
  }
}
</style>
