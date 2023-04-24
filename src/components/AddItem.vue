<template>
  <tr>
       <td></td>
    <td><input v-model="item.name" type="text" /></td>
    <td><input v-model="item.description" type="text" /></td>
    <td><input v-model="item.state" type="text" /></td>
    <td>
      <button @click="addItem">
        <span>Add</span>
      </button>
    </td>
  </tr>
</template>
 <script>
 export default{
     data(){
         return { 
             item:{}
             }
     },
     created(){
       this.item.state ="in-progress" 
     },
     methods: {
    addItem() {
       this.$emit("addItem",this.item);
    },
     },
 };
 </script>