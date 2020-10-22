<template>
  <div class="signup container">
    <h4>Join GEODEV and chat with a fellow developper</h4>
    <form @submit.prevent="signup" class="card-panel center">
      <h2 class="center grey-text text-darken-3">Signup</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email" />
      </div>
      <div class="field">
        <label for="password">Passwrod:</label>
        <input type="password" name="password" v-model="password" />
      </div>
      <div class="field">
        <label for="alias">Alias:</label>
        <input type="text" name="alias" v-model="alias" />
      </div>
      <p class="red-text center" v-if="feedback">{{ feedback }}</p>
      <div class="field center">
        <button class="btn grey darken-3">Signup</button>
      </div>
    </form>
  </div>
</template>
<script>
import slugify from "slugify";
import db from "@/firebase/init";
import firebase from "firebase";
export default {
  name: "Signup",
  data() {
    return {
      email: null,
      password: null,
      alias: null,
      feedback: null,
      slug: null,
    };
  },
  methods: {
    signup() {
      if (this.alias && this.email && this.password) {
        this.slug = slugify(this.alias, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true,
        });
        let ref = db.collection("users").doc(this.slug);
        ref.get().then((doc) => {
          if (doc.exists) {
            this.feedback = "This alias already exists";
          } else {
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password) // auth service
              .then((cred) => {
                ref.set({
                  alias: this.alias,
                  geolocation: null,
                  user_id: cred.user.uid,
                });
              })
              .then(() => {
                this.$router.push({ name: "GMap" });
              })
              .catch((err) => {
                console.log(err);
                this.feedback = err.message;
              });

            this.feedback = "This alias is free to use";
          }
        });
      } else {
        this.feedback = "You must enter all fields";
      }
    },
  },
};
</script>
<style>
.signup h4 {
  margin: 40px auto;
  max-width: 700px;
  text-align: center;
}
.signup form {
  max-width: 400px;
  margin: 60px auto;
}
.signup h2 {
  font-size: 2.4em;
}
.signup .field {
  margin-bottom: 16px;
}
</style>