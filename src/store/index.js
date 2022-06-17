import { createStore } from 'vuex'
import core from './modules/core'
import graph3D from './modules/graph3D'
import soukai from './modules/soukai'

export default app => createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    core: core(app),
    graph3D,
    soukai
  }
})
