<template>
  <div>
    <Form @submit="logIn"/>
  </div>
</template>

<script>
import firebase from "firebase"
import Form from "@/components/auth/Form"
export default {
  name: 'LogIn',
  components: {
    Form
  },
  methods: {
    logIn (user) {
      firebase
          .auth()
          .signInWithEmailAndPassword(user.email, user.password)
          .then(() => {
            alert('Successfully logged in')
            this.$router.push('/contact')
          })
          .catch(error => {
            alert(error.message)
          });
    }
  }
}
</script>
