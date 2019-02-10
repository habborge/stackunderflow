/* eslint-disable indent */
// import Vue from 'vue';
// import Router from 'vue-router';

import home from './components/home.vue';
import signup from './components/signup.vue';

import login from './components/login.vue';
import newquestion from './components/newquestion.vue';
import questioninfo from './components/questioninfo.vue';
import questiondelete from './components/deleteQuestion.vue';

import answer from './components/answer.vue';

export default [{
    path: '/',
    component: home,
  },
  {
    path: '/signup',
    component: signup,
  },
  {
    path: '/login',
    component: login,
  },
  {
    path: '/newquestion',
    component: newquestion,
  },
  {
    path: '/questioninfo/:id',
    component: questioninfo,
  },
  {
    path: '/deletequestion/:id',
    component: questiondelete,
  },
  {
    path: '/answers/:id',
    component: answer,
  },


];
