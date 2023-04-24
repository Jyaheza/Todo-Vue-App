<template>
  <div>
    <H1>Todo Edit</H1>
    <UserDisplay />
    <userLogout />

    <p>{{ message }}</p>
    <form @submit.prevent="updateTodo">
      Name:
      <input v-model="todo.name" type="text" id="name" />
      <input type="submit" name="submit" value="Update" v-on:click.prevent="updateTodo()">
      <button name="cancel" v-on:click.prevent="cancel()">List</button>
    </form>
    <button name="add" v-on:click.prevent="addForm()">Add Item</button>
    <button name="delete" v-on:click.="delete">delete</button>
    <table class="center">
      <tr>
        <th>Complete</th>
        <th>Name</th>
        <th>Description</th>
        <th>State</th>
        <th>Action</th>
      </tr>

      <ListItemDisplay
        v-for="item in items"
        :key="item.id"
        :item="item"
        @deleteItem="deleteItem(item.id)"
        @updateItem="updateItem(item.id, item)"
      />
      <AddItem v-if ="addItemDisplay" @addItem="addItem" />
    </table>
  </div>
</template>

<script>
import TodoServices from "@/services/TodoServices.js";
import ListItemDisplay from "@/components/ListItemDisplay.vue";
import UserDisplay from "@/components/UserDisplay.vue";
import AddItem from "@/components/AddItem.vue";
import userLogout from "@/components/userLogout.vue";
export default {
  components: {
    ListItemDisplay,
    UserDisplay,
    AddItem,
    userLogout,
  },
  props: ["id"],
  data() {
    return {
      todo: {},
      items: [],
      message: "",
      addItemDisplay: false
    };
  },
  created() {
    this.getList();
    this.getListItems(this.id);
  },

  
  methods: {
    addForm(){
      this.addItemDisplay =true;
    },
    getListItems(id) {
      TodoServices.getListItems(id)
        .then((response) => {
          this.items = response.data.items;
          console.log(response.data.items);
        })
        .catch((error) => {
          this.message = error.response.data.message;
        });
    },
    updateTodo() {
      console.log("help");
      TodoServices.updateList(this.id, this.todo)
        .then(() => {
          this.$router.push({ name: "list" });
        })
        .catch((error) => {
          this.message = error.response.data.message;
        });
    },
      addItem(item)  {
         console.log(item)
     TodoServices.addListItem(this.id, item)
      .then((response) => {
          item.id = response.data.itemId;
          this.items.push(item);
          this.addItemDisplay =false;
        })
        .catch((error) => {
          this.message = error.response.data.message;
           console.log(error.response.data)
        });

    },
    deleteItem(id){
      TodoServices.deleteListItem(this.id, id)
      .then(() => {
          this.items.forEach((item,i)=>{
            if(item.id==id){
              this.items.splice(i,1)
            }
          })
            // this.$router.push({ name: "Edit" });
        })
        .catch(error => {
          this.message= error.response.data.message;
        })
    },
    updateItem(id,  item){
    TodoServices.updateListItem(this.id, id, item)  
    .then(() => {
          this.$router.push({ name: "Edit" });
        })
        .catch((error) => {
          this.message = error.response.data.message;
        });
    },

    cancel() {
      this.$router.push({ name: "List" });
    },
    getList() {
      TodoServices.getList(this.id)
        .then((response) => {
          this.todo = response.data.list;
        })
        .catch((error) => {
          this.message = error.response.data.message;
        });
    },
    delete(){
this.$router.push({ name: "Delete" });
    },
  },
};
</script>

<style></style>