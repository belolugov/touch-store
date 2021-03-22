<template>
  <div>
    <b-navbar class="navbar" toggleable="lg" fixed="top">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" class="justify-content-center" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{name:'Gallery'}">Shop</b-nav-item>
          <b-nav-item to="/faq">FAQ</b-nav-item>
          <b-nav-item to="/contact">Contact</b-nav-item>
        </b-navbar-nav>
        <slot></slot>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
.navbar {
  background: #557ebd;
}
.navbar-light .navbar-nav .nav-link {
  color: white !important;
}
.navbar-light .navbar-nav .nav-link:hover {
  color: #aacddb !important;
}

a.nav-link.router-link-exact-active.router-link-active {
  color:#aacddb !important;
}
ul.navbar-nav {
  margin-right: 70px;
}
</style>
