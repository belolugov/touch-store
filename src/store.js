import Vuex from 'vuex'
import Vue from "vue"
import db from "@/db";
Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        products: [],
        cart: [],
        product: {}
    },
    mutations: {
        GET_PRODUCTS ( state, products ) {
            state.products = products
        },
        GET_ITEM ( state, product ) {
            state.product = product
        },
        GET_CART ( state, cart ) {
            state.cart = cart
        },

    },
    actions: {
        loadProducts (context) {
            const products = []
            db.collection('products').get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const temp = doc.data()
                    temp.id = doc.id
                    products.push(temp)
                })
                context.commit('GET_PRODUCTS',  products)
            })
          },
        loadItem (context, id) {
            db.collection("products").doc(id)
                .get().then(doc => context.commit('GET_ITEM', doc.data()))
        },
        // Cart actions
        getCart (context) {
            const savedCart = JSON.parse(localStorage.getItem('inCart')) || []
            context.commit('GET_CART', savedCart)
        },
        addToCart (context, product) {
            let cart = this.state.cart
            let added = false
            // Check if the item is in cart, if yes, increment the amount by 1
            for (let item of cart) {
                if (item.id === product.id) {
                    item.qty += 1
                    added = true
                }
            }
            // If item not in cart, set qty to 1 and add to cart
            if (!added) {
                Vue.set(product, 'qty', 1)
                cart.push(product)
            }
            context.commit('GET_CART', cart)
        },
        deleteItem (context, index) {
            let cart = this.state.cart
            cart.splice(index, 1)
            context.commit('GET_CART', cart)
        }
       }
   })
