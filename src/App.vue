<template>
  <div id="app">
    <Nav :inCart="inCart"/>
    <router-view
        @addToCart="addToCart"
        :inCart="inCart"
        @deleteItem="deleteItem"></router-view>
    <Loader :loading="isLoaderVisible" />
  </div>
</template>

<script>
import Nav from '@/components/Nav';
import Loader from '@/common/Loader';
import axios from 'axios';

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
    addToCart: function(product){
      this.inCart.push(product);
    },
    deleteItem: function() {

    }
  },
  created: function () {
    let that = this;
    axios.interceptors.request.use(function (config) {
      that.isLoaderVisible = true;
      return config
    }, function (error) {
      return Promise.reject(error);
    });

    axios.interceptors.response.use(function (response) {
      that.isLoaderVisible = false;
      return response;
    }, function (error) {
      return Promise.reject(error);
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
