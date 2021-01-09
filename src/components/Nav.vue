<template>
  <nav class="container navbar navbar-expand-lg navbar-light bg-light" v-bind:class=" { 'navbarOpen': show }">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" @click.stop="toggleNavbar()">
      <span v-if="!show" class="navbar-toggler-icon"></span>
      <b-icon v-else-if="show" if="show" icon="x" class="x-icon h1 my-auto"></b-icon>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{ 'show': show }">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" :to="{name:'Gallery'}">Shop<span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
      <router-link :to="{name:'Cart'}" id="cart-icon">
      <b-icon  class="h3" icon="cart-2"></b-icon>
      <span>{{ inCart.length ? inCart.length : '' }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
  export default{
    name: 'Nav',
    props: {
      msg: String,
      inCart: Array
    },
    data() {
      return {
        show: false,
      }
    },
    methods: {
      toggleNavbar() {
        this.show = !this.show
      }
    }
  }
</script>

<style scoped>
  #cart-icon span {
    position: relative;
    right: 20px;
    bottom: 17px;
    color: red;
    font-size: x-large;
  }
</style>