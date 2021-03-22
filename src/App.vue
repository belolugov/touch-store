<template>
  <div id="app">
    <Header :inCart="cart" />
    <router-view />
    <Loader :loading="isLoaderVisible" />
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import Loader from '@/common/Loader'
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Header,
    Loader,
  },
  created () {
    this.$store.dispatch('loadProducts')
    this.$store.dispatch('getCart')
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
  },
  mounted () {
    // Save cart to local storage
    window.addEventListener("beforeunload", () => localStorage.setItem('inCart', JSON.stringify(this.cart)))
  },
  data () {
    return {
      isLoaderVisible: false,
    }
  },
  computed: mapState({
      cart: state => state.cart
             })
}
</script>
