<template>
  <p> Hello {{ user.firstName + " " + user.lastName }}</p>
</template>  
    <script>
import TodoServices from "@/services/TodoServices.js";

export default {
  data() {
    return {
      user: {},
    };
  },
  mounted () {
    TodoServices.getUser()
      .then((response) => {
        this.user = response.data.user;
        console.log(response.data.user);
      })
      .catch((error) => {
        this.message = error.response.data.message;
      });
  },
};
</script>
    
