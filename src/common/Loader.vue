<template>
  <div v-if="loading" class="loader">
    <div class="mb-5 d-flex align-items-center">
      <strong>Loading...</strong>
    </div>
    <div>
      <div class="d-flex justify-content-center">
        <b-spinner class="mt-5" variant="primary" label="Loading..."></b-spinner>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: {
    loading: { type: Boolean }
  }
}
</script>


<style scoped>
.loader {
  position: fixed !important;
  width: 100%;
  height: 100%;
  top: 4rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200000;
}
.spinner-border {
  width:4rem;
  height: 4rem;
}

</style>