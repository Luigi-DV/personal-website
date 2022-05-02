import { createStore } from 'vuex'
import { mutations } from './mutations'
import { getters } from './getters'
import { state } from './state'

// Create a new store instance.
const store = createStore({
  state,
  getters,
  mutations
})

export default store
