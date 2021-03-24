<template>
  <b-container>
    <ul class="cart">
        <li v-for="(product, index) in cart" :key="index">
          <div class="image-container"><img :src="product.image" alt="item image"></div>
          <div class="title">{{ product.title }}
            <Select :product="product"/>
            <btn-group :product="product" :index="index" />
          </div>
          <p class="price">${{ product.price }}</p>
        </li>
    </ul>
    <empty-cart v-if="!cart.length" />
    <div class="total" v-if="cart.length">Your Total: {{ calcTotal }}</div>
  </b-container>
</template>

<script>
  import BtnGroup from "@/components/product-card/BtnGroup";
  import EmptyCart from "./EmptyCart.vue"
  import Select from "@/components/cart/Select";
  export default{
    name: 'Cart',
    components: {
      BtnGroup,
      EmptyCart,
      Select
    },
    computed: {
      calcTotal () {
        let total = 0;
        this.cart.forEach(item => total += item.price * item.qty)
        return total.toFixed(2);
      },
      cart () {
        return this.$store.state.cart
      }
    },
  }
</script>

<style scoped>
  .cart {
    max-width: 960px;
    margin: 4rem auto;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  .desktop li {
    display: flex;
    justify-content: center;
    font-size: large;
    margin-bottom: 20px;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(128,128,128, .5);
  }
  .desktop li:hover {
    background: aliceblue;
    border-radius: 5px;
  }
  .desktop li div {
    text-align: left;
  }
  li:hover {
    cursor:pointer;
  }
  .mobile li{
    padding: 0 10px;
    font-size: large;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(128,128,128, .5);
  }
  .image-container {
    min-width: 25%
  }
  img {
    display: block;
    max-width:230px;
    max-height:95px;
    width: auto;
    height: auto;
  }
  .title {
    flex-grow:2;
    text-align: center;
  }

  .price {
    font-weight: bold;
  }
  .total {
    float: right;
  }
  .delete {
    display: block;
  }
</style>
