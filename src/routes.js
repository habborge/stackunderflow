/* eslint-disable indent */
// import Vue from 'vue';
// import Router from 'vue-router';

import home from './components/home.vue';
import taskslist from './components/taskslist.vue';
import userslist from './components/userslist.vue';
import updatetask from './components/updateTask.vue';
import deletetask from './components/deleteTask.vue';
import updateuser from './components/updateUser.vue';
import deleteuser from './components/deleteUser.vue';

export default [{
    path: '/',
    component: home,
  },
  {
    path: '/taskslist',
    component: taskslist,
  },
  {
    path: '/updatetask/:id',
    component: updatetask,
  },
  {
    path: '/deletetask/:id',
    component: deletetask,
  },
  {
    path: '/userslist',
    component: userslist,
  },
  {
    path: '/updateuser/:id',
    component: updateuser,
  },
  {
    path: '/deleteuser/:id',
    component: deleteuser,
  },
];
