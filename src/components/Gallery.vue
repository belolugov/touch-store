<template>
  <div id="gallery" :class="{'mobile':this.$mq=='sm', 'desktop':this.$mq=='lg'}">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image">
        <div class="info">
          <h5>{{ product.title }}</h5>
          <p>${{ product.price }} </p>
          <hr>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Gallery',
    props: ['products'],
    data(){
      return {

      }
    },
  }

</script>

<style scoped>
  .desktop {
    max-width: 960px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(150px, auto);
    grid-gap: 20px;
    padding: 30px;
    background: aliceblue;
  }
  .desktop img {
    width: 90%;
    max-height: 50%;
    align-self: center;
    transition: all .2s ease-in-out;
  }
  .desktop img:hover {
    transform: scale(1.2);
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

 .product-card{
   display: inline-grid;
 }
 .info{
   align-self: end;
 }
.info p {
  font-size: medium;
}
.info:hover {
   color: blue;
}
.product-card:hover{
  cursor:pointer;
}

</style>