<template>
  <div>
    <Form @submit="register"/>
  </div>
</template>

<script>
import firebase from 'firebase'
import Form from "@/components/auth/Form"
export default {
  name: 'Registration',
  components: {
    Form
  },

  methods: {
    register (user) {
      firebase
          .auth()
          .createUserWithEmailAndPassword(user.email, user.password)
      .then(() => {
        alert('Successfully registered! Please login.')
        this.$router.push('/contact')
      })
          .catch(error => {
            alert(error.message)
          })
    }
  }
}
</script>
