<template>
  <tr>
    <td></td>
    <td>
      <span v-if="!editItem">{{ listItem.name }}</span>
      <input v-model="listItem.name" type="text" v-if="editItem" />
    </td>
    <td>
      <span v-if="!editItem">{{ listItem.description }}</span>
      <input v-model="listItem.description" type="text" v-if="editItem" />
    </td>
    <td>
      <span v-if="!editItem">{{ listItem.state }}</span>
      <input v-model="listItem.state" type="text" v-if="editItem" />
    </td>
    <td>
      <button v-if="!editItem" @click="editForm">edit</button>
      <button v-if="editItem" @click="updateItem">save</button>
      <button @click="deleteItem">delete</button>
    </td>
  </tr>
</template>  
    <script>
export default {
   props :{
     item : Object
     },
  data() {
    return {
      editItem: false,
      listItem : {}
    };
  },
  created () {
    this.listItem = this.item;
  },
  methods: {
    editForm() {
      this.editItem = true;
    },
    deleteItem() {
      this.$emit("deleteItem");
    },
    updateItem() {
      this.$emit("updateItem");
      this.editItem = false;
    },
  },
};
</script>
    
