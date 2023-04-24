<template>
  <div>
    <h1>Add new user</h1>
    <p>{{ message }}</p>
    <form @submit.prevent="logIn">
     firstName:
      <input v-model="user.firstName" type="text" id="username" /><br> 
      <br />
      lastName:
      <input v-model="user.lastName" type="text" id="lastName" /><br>
      <br />
    username:
      <input v-model="user.username" type="text" id="user" /><br>
      <br />
     password:
      <input v-model="user.password" type="text" id="password" /><br>
      <br />
      <input type="submit" name="submit" value="Log In" />
      <input type="submit" name="submit" value="Save">
    </form>
  </div>
</template>
<script>
import TodoServices from "@/services/TodoServices.js";
export default {
  data() {
    return {
      user: {},
      message:''
     
    }
  },
   methods: {
      
logIn(){
   TodoServices.addUser(this.user)
      .then(() => {
          this.$router.push({ name: "Login" })
        })
        .catch(error => {
         this.message= error.response.data.message;
        })
    },
  },
}
</script>