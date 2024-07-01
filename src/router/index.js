import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import ChatroomView from '../views/ChatroomView.vue'
import { projectAuth } from '@/firebase/config'

// auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  console.log('current user in auth guard: ', user)
  if (!user) {
    next({ name: 'WelcomeView' })
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'WelcomeView',
      component: WelcomeView
    },
    {
      path: '/chatroom',
      name: 'ChatroomView',
      component: ChatroomView,
      beforeEnter: requireAuth
    }
  ]
})

export default router
