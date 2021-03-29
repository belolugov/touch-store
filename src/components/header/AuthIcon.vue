<template>
  <div class="auth-icon">
    <b-icon class="h3" icon="person" variant="light" @click="$bvModal.show('auth-modal')"></b-icon>
    <auth-modal />
  </div>
</template>

<script>
import AuthModal from "@/components/auth/AuthModal"
export default {
  name: "AuthIcon",
  components: {
    AuthModal
  }
}
</script>

<style scoped>
  svg {
    transition: all .2s ease-in-out;
    margin-right: 3px;
  }
  svg:hover {
     cursor: pointer;
     transform: scale(1.3);
  }

</style>
