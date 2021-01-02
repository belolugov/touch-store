<template>
  <div>
    <ul id="cart" :class="{'mobile':this.$mq=='sm', 'desktop':this.$mq=='lg', 'tablet':this.$mq=='md'}">
        <li v-for="(item, index) in inCart" :key="item.index" >
          <img :src="item.image" alt="">
          <p class="title">{{ item.title }}</p>
          <p class="price">${{ item.price }}</p>
          <b-icon @click="deleteItem(index)" icon="x" class="h1" variant="danger"></b-icon>
        </li>
      <h1 v-if="!inCart.length">Your Cart is Empty</h1>
    </ul>

  </div>
</template>

<script>
  export default{
    name: 'cartView',
    props: ['inCart'],
    data(){
      return{

      }
    },
    methods: {
      deleteItem: function(index) {
        this.$emit('deleteItem', index);
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
</style>