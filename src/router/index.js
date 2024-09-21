import { createRouter, createWebHashHistory } from "vue-router";

import Toxoplasmose from '@/components/Toxoplasmose.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/toxoplasmose',
    },
    {
      path: '/toxoplasmose',
      name: 'Toxoplasmose',
      component: Toxoplasmose,
    }
  ],
})

export default router
