<template>
  <div>
    <h1>Log In</h1>
    <p>{{ message }}</p>
    <form @submit.prevent="logIn">
      Username:
      <input v-model="user.username" type="text" id="username" /><br>
      <br />
       Password: 
      <input v-model="user.password" type="password" id="password" /><br>
      <br />
      <input type="submit" name="submit" value="Log In" /><br>
       <button name="cancel" v-on:click.prevent="cancel()">Add new user</button>
    </form>
  </div>
</template>

<script>
import TodoServices from "@/services/TodoServices.js";
export default {
  data() {
    return {
      user: {},
      message: "",
      token: "",
    };
  },

  methods: {
    logIn() {
      TodoServices.loginUser(this.user)
        .then((response) => {
          this.token = response.data.token;
          localStorage.setItem("token", this.token);
          
          this.$router.push({ name: "List" });
        })
        .catch((error) => {
          this.message = error.response.data.message;
        });
    },
    cancel() {
      this.$router.push({ name: "User" });
    },
  },
};
</script>

<style scoped>
.error {
  color: #ff0000;
}
</style>