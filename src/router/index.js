import { createRouter, createWebHistory } from "vue-router";
import List from '@/views/todo-list.vue'
import Edit from '@/views/todo-edit.vue'
import Delete from '@/views/todo-delete.vue'
import Add from '@/views/todo-add.vue'
import Login from '@/views/todo-login.vue'
import User from '@/views/todo-adduser.vue'
const routes = [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
        path: "/list",
        name: "List",
        component: List,
      },
      {
        path: "/add",
        name: "Add",
        component: Add,
      },
    {
        path: "/edit/:id",
        name: "Edit",
        component: Edit,
        props:true
      },
      {
        path: "/delete/:id",
        name: "Delete",
        component: Delete,
        props:true
      },
      {
        path: "/user",
        name: "User",
        component: User,
      },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
  export default router;