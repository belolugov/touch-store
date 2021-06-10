<template>
  <b-button-group size="lg" :class="{'mt-3':isCart}">
    <b-button variant="success" @click.prevent="addToCart(product)" v-if="!isCart">Add to Cart</b-button>
    <b-button variant="outline-danger" @click="deleteItem(index)" v-if="isCart"><b-icon icon="trash"></b-icon></b-button>
  </b-button-group>
</template>

<script>
export default {
  name: 'BtnGroup',
  props: {
    product: Object,
    index: Number
  },
  methods: {
    addToCart (product) {
      this.$store.dispatch('addToCart', product)
    },
    deleteItem (index) {
      this.$store.dispatch('deleteItem', index)
    }
  },
  computed: {
    isCart () {
     return this.$route.name === 'cart'
      }
    }
  }
</script>

<style scoped>

</style>
