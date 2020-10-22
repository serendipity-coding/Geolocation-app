import Vue from 'vue'
import Router from 'vue-router'
import GMap from '../components/home/GMap.vue'
import Signup from '../components/auth/Signup.vue'
import Login from '../components/auth/Login.vue'
import VueProfile from '../components/profile/VueProfile.vue'
import firebase from 'firebase'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap,
      meta: {
        requiresAuth: true
      }
    }
    , {

      path: '/signup',
      name: 'Signup',
      component: Signup
    }
    , {

      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/profile/:id',
      name: 'VueProfile',
      component: VueProfile,
      meta: {
        requiresAuth: true
      }
    }

  ]
})

router.beforeEach((to, from, next) => {
  //check to see if route requires auth
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    //check auth state of user
    let user = firebase.auth().currentUser
    if (user) {
      //user signed in, proceed to route
      next()
    } else {
      //redirect to login
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export default router
