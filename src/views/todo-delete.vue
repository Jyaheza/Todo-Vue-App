<template>
  <div>
    <H1>todo Delete</H1>
      <UserDisplay />
       <userLogout/>
    <button v-on:click="deleteTodo()">Delete</button>
    <button v-on:click="cancel()">Cancel</button>
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
  props: ['id'],

  data() {
    return {
      todo: Object,
     message:''
    }
  },
  created() {
   TodoServices.getLists(this.id)
      .then(response => {
        this.todo = response.data.list;
      })
      .catch(error => {
        this.message= error.response.data.message;
      })
  },

  methods: {
    deleteTodo() {
      TodoServices.deleteList(this.id)
        .then(response => {
          this.errors = response.data
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

<style></style>