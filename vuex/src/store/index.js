import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
          first_name: 'John',
          last_name: 'Doe',
          email: 'johndoe@gmail.com'
    },
    products: [
      {
        id: 1,
        name: 'Product A',
        price: 10.0
      },
      {
        id: 2,
        name: 'Product B',
        price: 15.0
      },
      {
        id: 3,
        name: 'Product C',
        price: 20.0
      }
    ],
    cart: []
  },
  mutations: {
    storeUser(state, data) {
      state.user = data;
    },

    addProduct(state, data) {
      state.cart.push(data);
    },

    removeProduct(state, id) {
      const idx = state.cart.findIndex(o => o.id === id);
      state.cart.splice(idx, 1);
    }
  },
  getters: {
    total(state) {
      // Dependência
      // Retornar um total
      return state.cart.reduce((total, item) => total + item.price, 0);
    },
  },
  actions: {
    storeUser({ commit }, data) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('storeUser', data);
          resolve();
        }, 3000)
      })
    }
  },
  modules: {
  }
})
