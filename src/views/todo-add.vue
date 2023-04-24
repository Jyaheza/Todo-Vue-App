<template>
  <div>
    <H1>Todo Add</H1>
    <UserDisplay />
     <userLogout/>
    <p>{{message}}</p>
     <form @submit.prevent="addTodo">
      Name:
      <input v-model="todo.name" type="text" id="name">
    
      <input type="submit" name="submit" value="Save">
      <button name="cancel" v-on:click.prevent="cancel()">Cancel</button>
    </form>
  </div>
</template>

<script>
import TodoServices from '@/services/TodoServices.js';
import UserDisplay from "@/components/UserDisplay.vue";
import userLogout from "@/components/userLogout.vue";

export default {
  components: {
   
    UserDisplay,
    userLogout,
  },
  data() {
    return {
      todo: {},
      message:''
     
    }
  },

  methods: {
    addTodo() {
      TodoServices.addList(this.todo)
        .then(() => {
          this.$router.push({ name: 'List' })
        })
        .catch(error => {
         this.message= error.response.data.message;
        })
    },
    cancel() {
      this.$router.push({ name: 'List' })
    }
   
  }
}
</script>

<style scoped>
.error {
  color: #ff0000;
}
</style>