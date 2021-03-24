<template>
  <div class="select-quantity mt-3">
  <b-form-select v-model="product.qty"
                 :options="selectOptions"
                 size="sm"
  ></b-form-select>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    product: Object
  },
  computed: {
    selectOptions () {
      const options = []
      for ( let i = 1; i <= 10; ++i ) {
        const option = { value: i, text: i.toString() }
        options.push(option)
      }
      return options
    }
  }
}
</script>
<style scoped>
  .select-quantity {
    display: block;
    width: 10%;
  }
  .mobile .select-quantity {
    width: 35%;
  }
</style>

