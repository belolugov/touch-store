<template>
  <div id="app">
    <Nav :inCart="inCart"/>
    <router-view
        @addToCart="addToCart"
        :inCart="inCart"
        ></router-view>
    <Loader :loading="isLoaderVisible" />
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Loader from '@/common/Loader'
import Vue from 'vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Nav,
    Loader,
  },

  data() {
    return {
      isLoaderVisible: false,
      inCart: [],
    }
  },
  methods: {
    addToCart (product) {
      let added = false
      for ( let item of this.inCart ) {
        if ( item.id === product.id ) {
          item.qty += 1
          added = true
          }
        }
      if ( !added ) {
        Vue.set(product, 'qty', 1)
        this.inCart.push(product)
      }
    }
  },
  created: function () {
    this.$store.dispatch('loadProducts')
    let that = this
    axios.interceptors.request.use(function (config) {
      that.isLoaderVisible = true
      return config
    }, function (error) {
      return Promise.reject(error)
    });

    axios.interceptors.response.use(function (response) {
      that.isLoaderVisible = false
      return response
    }, function (error) {
      return Promise.reject(error)
    });
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
