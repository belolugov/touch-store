<template>
  <div class="container">
    <ul id="cart" :class="{'mobile':this.$mq=='sm', 'desktop':this.$mq=='lg', 'tablet':this.$mq=='md'}">
        <li v-for="item in inCart" :key="item.index">
          <img :src="item.image" alt="">
          <div class="title">{{ item.title }}
            <b-form-select v-model="item.qty"
                           :options="selectOptions"
                           size="sm"
                           class="select-quantity mt-3"
                           ></b-form-select>
          </div>
          <p class="price">${{ item.price }}</p>
        </li>
      <h1 v-if="!inCart.length">Your Cart is Empty</h1>
    </ul>
    <div id="total" v-if="inCart.length">Your Total: {{ calcTotal }}</div>
  </div>
</template>

<script>
  export default{
    name: 'cartView',
    props: ['inCart'],
    data(){
      return{}
    },
    methods: {},
    computed: {
      calcTotal() {
        let total = 0;
        for (let item of this.inCart) {
          total += item.price*item.qty;
        }
        return total.toFixed(2);
      },
      selectOptions() {
        const options =[]
        for (let i = 1; i < 21; ++i) {
          const option = {value: i, text: i.toString()}
          options.push(option);
        }
        return options
      }
    }
  }
</script>

<style scoped>
  #cart{
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
  li:hover{
    cursor:pointer;
  }
  .mobile li{
    display: flex;
    justify-content: start;
    padding: 0 10px;
    font-size: large;
    margin-bottom: 20px;
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
  #total {
    float: right;
  }
</style>
