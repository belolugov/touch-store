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
    display: grid;
  }

  ul {
    list-style: none;
  }


</style>