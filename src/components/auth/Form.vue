<template>
  <b-form class="auth-form" @submit.prevent="submit">
    <b-form-group label="Email address:" label-for="email">
      <b-form-input
          id="email"
          v-model="user.email"
          type="email"
          placeholder="Enter email"
          required
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Your Password:" label-for="password">
      <b-form-input
          type="password"
          id="password"
          v-model="user.password"
          placeholder="Enter password"
          required
      ></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary">Submit</b-button>
  </b-form>
</template>

<script>
export default {
  name: "Form",
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submit () {
      this.$emit('submit', this.user)
    }
  }
}
</script>
