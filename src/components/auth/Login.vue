<template>
  <div class="login container">
    <h4>Welcome back!</h4>
    <form @submit.prevent="login" class="card-panel">
      <h2 class="center grey-text text-darken-3">Login</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email" />
      </div>
      <div class="field">
        <label for="password">Passwrod:</label>
        <input type="password" name="password" v-model="password" />
      </div>
      <p class="red-text center" v-if="feedback">{{ feedback }}</p>
      <div class="field center">
        <button class="btn grey darken-3">Login</button>
      </div>
    </form>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      feedback: null,
    };
  },
  methods: {
    login() {
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then((cred) => {
            console.log(cred.user);
            this.$router.push({ name: "GMap" });
          })
          .catch((err) => {
            this.feedback = err.message;
          });
        this.feedback = null;
      } else {
        this.feedback = "Please fill in both fields";
      }
    },
  },
};
</script>
<style >
.login h4 {
  margin: 40px auto;
  max-width: 700px;
  text-align: center;
}
.login form {
  max-width: 400px;
  margin: 60px auto;
}
.login h2 {
  font-size: 2.4em;
}
.login .field {
  margin-bottom: 16px;
}
</style>