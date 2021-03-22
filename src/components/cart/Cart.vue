<template>
  <div class="container">
    <ul id="cart" :class="{ 'mobile':this.$mq=='sm', 'desktop':this.$mq=='lg', 'tablet':this.$mq=='md' }">
        <li v-for="(item, index) in cart" :key="index">
          <div class="image-container"><img :src="item.image" alt="item image"></div>
          <div class="title">{{ item.title }}
            <b-form-select v-model="item.qty"
                           :options="selectOptions"
                           size="sm"
                           class="select-quantity mt-3"
                           ></b-form-select>
            <button class=" btn btn-outline-danger delete my-2" @click="deleteItem(index)">Delete</button>
          </div>
          <p class="price">${{ item.price }}</p>
        </li>
    </ul>
    <emptyCart v-if="!cart.length" />
    <div id="total" v-if="cart.length">Your Total: {{ calcTotal }}</div>
  </div>
</template>

<script>
  import emptyCart from "./emptyCart.vue"
  export default{
    name: 'Cart',
    components: {
      emptyCart
    },
    methods: {
      deleteItem (index) {
        this.$store.dispatch('deleteItem', index)
      }
    },
    computed: {
      calcTotal () {
        let total = 0;
        this.cart.forEach(item => total += item.price * item.qty)
        return total.toFixed(2);
      },
      selectOptions () {
        const options = []
        for ( let i = 1; i <= 10; ++i ) {
          const option = { value: i, text: i.toString() }
          options.push(option)
        }
        return options
      },
      cart () {
        return this.$store.state.cart
      }
    },
  }
</script>

<style scoped>
  #cart {
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
    padding-left: 3rem;
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
  .select-quantity {
    display: block;
    width: 10%;
  }
  .mobile .select-quantity {
    width: 35%;
  }
  .price {
    font-weight: bold;
  }
  #total {
    float: right;
  }
  .delete {
    display: block;
  }
</style>
