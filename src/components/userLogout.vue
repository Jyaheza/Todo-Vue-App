<template>
  <div>
    
    <p>{{ message }}</p>
  
      <a v-on:click="logout">(logOut)</a>

    
  </div>
</template>
<script>
import TodoServices from "@/services/TodoServices.js";
export default {
  data() {
    return {
    
      message:''
     
    }
  },
   methods: {
      
logout(){
   TodoServices.logoutUser()
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