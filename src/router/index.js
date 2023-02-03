import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/categorias',
      name: 'categories',
      component: () => import('../views/categories/Index.vue')
    },
    {
      path: '/categoria/add',
      name: 'category-add',
      component: () => import('../views/categories/Add.vue')
    },
    {
      path: '/categoria/:id',
      name: 'category-details',
      component: () => import('../views/categories/View.vue')
    },
    {
      path: '/categoria/edit/:id',
      name: 'category-edit',
      component: () => import('../views/categories/Edit.vue')
    },
    {
      path: '/autores',
      name: 'authors',
      component: () => import('../views/authors/Index.vue')
    },
    {
      path: '/autor/add',
      name: 'author-add',
      component: () => import('../views/authors/Add.vue')
    },
    {
      path: '/autor/:id',
      name: 'author-details',
      component: () => import('../views/authors/View.vue')
    },
    {
      path: '/autor/edit/:id',
      name: 'author-edit',
      component: () => import('../views/authors/Edit.vue')
    },
    {
      path: '/livros',
      name: 'books',
      component: () => import('../views/books/Index.vue')
    },
    {
      path: '/livro/add',
      name: 'book-add',
      component: () => import('../views/books/Add.vue')
    },
    {
      path: '/livro/:id',
      name: 'book-details',
      component: () => import('../views/books/View.vue')
    },
    {
      path: '/livro/edit/:id',
      name: 'book-edit',
      component: () => import('../views/books/Edit.vue')
    },
  ]
})

export default router
