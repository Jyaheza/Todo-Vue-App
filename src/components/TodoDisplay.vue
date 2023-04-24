<template>
  <div>
    
      
      <tr>
        <td width= "50px"><span>{{ todo.name }}  </span></td>
    
      <td width= "100px">
        <router-link :to="{ name: 'Edit', params: { id: todo.id } }">
        <span>edit</span>
        </router-link>
        <span>|</span>
        <router-link :to="{ name: 'Delete', params: { id: todo.id } }">
        <span>delete</span>
        </router-link>
        <span>)</span>
    </td> 
    </tr>
    
  </div>
</template>

<script>
export default {
  props: {
    todo : Object,
  }
}
</script>

<style></style>