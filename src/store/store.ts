import Vue from "vue";
import Vuex, {StoreOptions} from "vuex";
import State, {Item} from './item.interface'

Vue.use(Vuex);

const store: StoreOptions<State> = {
  state: {
    itemList: [
      { id: 0, title: "테스트1", status: 'active' },
      { id: 1, title: "테스트2", status: 'clear' },
      { id: 2, title: "테스트3", status: 'active' }
    ],
  },
  mutations: {
    changeStatus(state, {id, status}: {id: number, status: 'active' | 'clear'}, ){
      console.log(`changeStatus(${id}, ${status})`)
      console.log(state.itemList.findIndex(item=>item.id == id))
      state.itemList[state.itemList.findIndex(item=>item.id == id)].status = status
    },
  },
  actions: {

  },
  getters:{
    allItemList: state => state.itemList,
    activeItemList: (state) => state.itemList.filter(item=>item.status === 'active'),
    clearItemList: (state) => state.itemList.filter(item=>item.status === 'clear'),
  },
  modules: {}
}

export default new Vuex.Store(store);
