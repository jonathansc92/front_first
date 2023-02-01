import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
      {
        path: "/",
        name: "home",
        component: () => import("./src/views/pages/Home.vue"),
        meta: { title: 'Home' }
      },
      {
        path: "/example",
        name: "example",
        component: () => import("./src/views/pages/posts/Posts.vue"),
        meta: { title: 'Posts' }
      },
      {
        path: "/#home-nossa-historia",
        name: "home-nossa-historia",
        component: () => import("./src/views/pages/Home.vue"),
        meta: { title: 'Home' }
      },
      {
        path: "/#home-nossas-acoes",
        name: "home-nossas-acoes",
        component: () => import("./src/views/pages/Home.vue"),
        meta: { title: 'Home' }
      },
      {
        path: "/racoes-pierino",
        name: "racoes-pierino",
        component: () => import("./src/views/pages/OurProducts.vue"),
        meta: { title: 'Rações Pierino' }
      },
      {
        path: "/brinquedos-e-acessorios",
        name: "brinquedos-e-acessorios",
        component: () => import("./src/views/pages/OurProducts.vue"),
        meta: { title: 'Brinquedos e Acessórios' }
      },
      {
        path: "/higiene-e-limpeza",
        name: "higiene-e-limpeza",
        component: () => import("./src/views/pages/OurProducts.vue"),
        meta: { title: 'Higiene e Limpeza' }
      },
      {
        path: "/nossos-produtos",
        name: "nossos-produtos",
        component: () => import("./src/views/pages/OurProducts.vue")
      },
      {
        path: "/nossas-acoes",
        name: "nossas-acoes",
        component: () => import("./src/views/pages/OurActions.vue"),
        meta: { title: 'Nossas Ações' },
        props: route => ({ query: route.query.q })
      },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return window.scrollTo({ 
        top: document.querySelector(to.hash).offsetTop, 
        behavior: 'smooth' 
      })
    } else {
      return { x: 0, y: 0 }
    }
  }
});

const DEFAULT_TITLE = 'Pierino';
router.beforeEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router