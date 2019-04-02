<template>
  <div>
    <EditComponent v-if="$route.query.editId"/>
    <table v-else class="table table-striped">
      <thead>
      <tr>
        <th>Квартира</th>
        <th style="text-align: center">Действие</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="post in ammo" :key="post._id">
        <td @click="changeRoute(post._id)">{{ post.titleUA }}</td>
        <td width="150px" class="buttons-td">
          <p @click="editPage(post._id)">Edit</p>
          <p @click.prevent="deletePost(post._id)">Delete</p>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import axios from 'axios'
  import EditComponent from './Edit'
  export default {
    name: "List",
    components: {
      EditComponent
    },
    data() {
      return{
        query: undefined,
        ammo: undefined
      }
    },
    methods: {
      deletePost(id) {
        this.$store.dispatch('flats/deleteNewsById', id)
      },
      changeRoute(id) {
        this.$router.push({ path: '/' + this.$i18n.locale + '/admin/flats', query: { parentId: id } })
        this.query = id
        this.getAds()
      },
      editPage(id){
        this.$router.push({ path:'/' + this.$i18n.locale + '/admin/flats', query: {editId: id } })
      },
      async getAds(){
        if(this.$route.query.parentId) {
          this.query = this.$route.query.parentId
        } else this.query = undefined
        await this.$store.dispatch('flats/getAllFlatsById', this.query)
        this.ammo = this.$store.state.ammo
      }
    },
    async created() {
      this.getAds()
    },
    watch: {
      '$route' (to, from) {
        this.getAds()
      }
    }
  }
</script>

<style lang="scss" scoped>
  $trolleyGray: #7C7C7C;
  $roseTaupe: #8B635C;
  $ghostWhite: #F7F9F9;
  .buttons-td{
    text-align: center;
    p{
      display: inline-block;
      color: $trolleyGray;
      padding: 0 8px;
      margin: 0;
      transition: .3s;
      &:hover {
        color: #fff;
        background-color: $trolleyGray;
        text-decoration: none;
        cursor: pointer;
      }
    }
    a{
      color: $trolleyGray;
      padding: 0 8px;
      transition: .3s;
      &:hover {
        color: #fff;
        background-color: $trolleyGray;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
</style>
