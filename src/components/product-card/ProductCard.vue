<template>
  <router-link
      :to="{ name:'product-page', params: { id:product.id, product:product }}">
    <img :src="/*product.image*/ 'http://pngimg.com/uploads/cocacola/cocacola_PNG0.png'">
    <div class="info info-search" >
      <h5>{{ product.title }}</h5>
      <p>${{ product.price }}</p>
      <slot></slot>
      <hr>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object,
  }
}
</script>

<style scoped>
 /* Gallery product card styles */
  .desktop img {
    width: 90%;
    max-height: 50%;
    align-self: center;
  }
  .card-blur {
    filter: blur(4px);
  }
  hr {
    border-top-width:2px;
  }
  .mobile {
    display: grid;
    grid-template-columns: none;
    grid-gap: 20px;
    padding:15px;
  }
  .mobile img {
    width: 90%;
    max-height: 100%;
  }
  .mobile .info {
    margin-top: 50px;
  }
  .product-card {
    display: inline-grid;
    transition: all .2s ease-in-out;
  }
  .info {
    align-self: end;
  }
  .info p {
    font-size: medium;
  }
  .product-card:hover {
    cursor:pointer;
    transform: scale(1.2);
  }
  a:hover {
    text-decoration: none;
  }

 /* Search dropdown product card styles */

 .product-search {
    display: flex;
    padding: 15px;
    border-bottom: #b7bbbd 1px solid;
  }
  .product-search:hover {
    cursor: pointer;
    text-decoration: none;
    background: aliceblue;
    color: black;
  }
  .product-search img {
    width: 30%;
  }
  .mobile .product-search img {
    eight: fit-content;
    align-self: center;
  }
  #search-results .info-search {
    align-self: center;
    justify-self: center;
    padding-left: 25px;
  }
</style>
