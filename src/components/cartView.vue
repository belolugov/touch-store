<template>
  <ul id="cart">
      <li v-for="item in inCart" :key="item.index" >
        <p class="title">{{ item.title }}</p>
        <p class="price">{{ item.price }}</p>
      </li>
  </ul>
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

    }
  }

</script>

<style scoped>
  #cart{
    max-width: 1280px;
    margin: 4rem auto;
  }
  ul {
    list-style: none;
  }
  li {
    display: flex;
  }


</style>