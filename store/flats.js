import axios from 'axios'

export const state = () => ({

})

export const mutations = {
  setNews(state, payload) {
    payload.sort(function (a,b) {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    this.state.ammo = payload
  },
  setTemplate(state, payload) {
    this.state.template = payload
  },
  setSortName(state, payload) {
    this.state.sort = payload
  },
  setAd(state, payload) {
    this.state.ad = payload
  }
}

export const actions = {
  async getAllFlatsFromApi({commit}) {
    let url = 'http://localhost:4000/listHome';
    await axios.get(url)
      .then(response => {
        commit('setNews', response.data);
      });
  },
  async getFlatById({commit}, id) {
    let url = `http://localhost:4000/listHome/search/${id}`;
    await axios.get(url).then((response) => {
      commit('setAd', response.data)
    });
  },
  async getAllFlatsById({commit}, id) {
    let url = 'http://localhost:4000/listHome/findByParent/' + id;
    await axios.get(url)
      .then(response => {
        commit('setNews', response.data);
      });
  },
  async deleteNewsById({dispatch}, id) {
    let url = `http://localhost:4000/listHome/delete/${id}`;
    axios.delete(url).then(response => {
      dispatch('getAllNewsFromApi')
    });
  },
  async getTemplateName({commit}, id) {
    if(id !== undefined) {
      let url = `http://localhost:4000/listHome/select/${id}`;
      await axios.get(url).then((response) => {
        commit('setTemplate', response.data.blockView)
        commit('setSortName', response.data.sortType)
      });
    } else {
      commit('setTemplate', 'block')
      commit('setSortName', 'asc')
    }
  }
}

export const getters = {
  getAdById: state => id => {
    return state.ads.filter((item) => {
      return (item.id === id)
    })
  }
}
