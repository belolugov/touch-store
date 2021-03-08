import Vuex from 'vuex'
import Vue from "vue";
import axios from 'axios';
Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        products: [],
        product: {}
    },
    mutations: {
        GET_PRODUCTS(state, products) {
            state.products = products
        },
        GET_ITEM(state, product) {
            state.product = product
        }
    },
    actions: {
        loadProducts (context) {
            axios.get('https://fakestoreapi.com/products/').then(res => {
                context.commit('GET_PRODUCTS',  res.data);
            }).catch(error => {
                throw new Error(`API ${error}`);
            });
          },
        loadItem (context, id) {
            axios.get('https://fakestoreapi.com/products/' + id).then(res => {
                    context.commit('GET_ITEM', res.data)
            });
        }
       }
   })
