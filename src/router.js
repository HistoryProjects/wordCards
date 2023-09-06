import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue';
import LearnedWords from './pages/LearnedWords.vue';
import MakeWord from './pages/MakeWord.vue';
import Studied from './pages/Studied.vue';
import WriteWord from './pages/WriteWord.vue';
import YasOrNo from './pages/YasOrNo.vue';


const router =  createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: "Home",
      component: Home
    },
    {
      path: '/LearnedWords',
      name: "LearnedWords",
      component: LearnedWords
    },
    {
      path: '/MakeWord',
      name: "MakeWord",
      component: MakeWord
    },
    {
      path: '/Studied',
      name: "Studied",
      component: Studied,
    },
    {
      path: '/WriteWord',
      name: "WriteWord",
      component: WriteWord
    },
    {
      path: '/YasOrNo',
      name: "YasOrNo",
      component: YasOrNo
    }
  ]
})

export default router;