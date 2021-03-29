<template>
  <div>
    <b-navbar class="navbar" toggleable="lg" fixed="top">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" class="justify-content-center" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{name: 'home'}">Home</b-nav-item>
          <b-nav-item :to="{name: 'gallery'}">Shop</b-nav-item>
          <b-nav-item :to="{name: 'faq'}">FAQ</b-nav-item>
          <b-nav-item :to="{name: 'contact'}">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <slot></slot>
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
  background: #000;
  height: 3.5rem;
  padding: 0 3rem;
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
.auth-icon {
  margin-right: 10px;
}
</style>
