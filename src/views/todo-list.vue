<template>
  <div>
    <H1>Todo List</H1>
    <p>{{ message }}</p>
    <UserDisplay />
    <userLogout />
    <table class="center">
      <tr>
        <th width= "50px">Todo list</th>
         <th width= "100px">Action</th>    
      </tr>
      <TodoDisplay v-for="todo in todos" :key="todo.id" :todo="todo" />
    </table>
  </div>
</template>

<script>

import TodoDisplay from "@/components/TodoDisplay.vue";
import TodoServices from "@/services/TodoServices.js";
import UserDisplay from "@/components/UserDisplay.vue";
import userLogout from "@/components/userLogout.vue";
export default {
  components: {
    TodoDisplay,
    UserDisplay,
    userLogout,
  },
  data() {
    return {
      todos: [],
      message: "",
    };
  },
  created() {
    this.getLists();
  },
  methods: {
    getLists() {
      TodoServices.getLists()
        .then((response) => {
          this.todos = response.data.lists;
        })
        .catch((error) => {
          this.message = error.response.data.message;
        });
    },
  },
 
};
</script>

<style></style>