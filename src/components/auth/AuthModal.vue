<template>
  <b-modal
      id="auth-modal"
      size="sm"
      header-bg-variant="success"
      :title="login ? 'Log in' : 'Register please' "
      :hide-footer="true">
    <log-in v-if="login"/>
    <Registration v-else-if="!login" />
    <b-button class="mt-2" v-if="login" @click="login = !login"><b-icon icon="person-plus" variant="light" class="h2 m-auto pr-1"></b-icon>Sign Up</b-button>
    <b-button class="mt-2" v-if="!login" @click="login = !login">I have an Account</b-button>
  </b-modal>
</template>

<script>
import LogIn from "@/components/auth/LogIn"
import Registration from "@/components/auth/Registration"
export default {
  name: "AuthModal",
  components: {
    LogIn,
    Registration
  },
  data () {
    return {
      login: true
    }
  }
}
</script>

<style scoped>
  button  {
    display: inline-block;
  }

</style>
