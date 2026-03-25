import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Profile from '../components/profile/Profile.vue'
import Support from '../components/Support.vue'
import MyCourses from '../components/course/MyCourses.vue'
import Library from '../components/Library.vue'
import OfferPage from '@/components/offer/OfferPage.vue'
import CoursePage from '@/components/course/CoursePage.vue'

const routes = [
  { path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Magisterium' }
  },

  {
    path: '/support',
    name: 'Support',
    component: Support,
    meta: {title: 'Техническая поддержка | Magisterium'}
  },

  {
    path: '/my-courses',
    name: 'MyCourses',
    component: MyCourses,
    meta: {title: 'Мои курсы | Magisterium'}
  },
  
  {
    path: '/library',
    name: 'Library',
    component: Library,
    meta: {title: 'Библиотека | Magisterium'}
  }, 
  
  {
    path: '/products/:slug',
    name: 'OfferPage',
    component: OfferPage,
    props: true,
  },
  
  {
    path: '/courses/:slug',
    name: 'CoursePage',
    component: CoursePage,
    props: true,
  },  

  { path: '/profile',
    component: Profile,
    children: [
      {
        path: '',
        name: 'ProfileMain',
        component: () => import('../components/profile/ProfileTabs.vue'),
      },
      {
        path: 'edit-profile',
        name: 'ProfileEdit',
        component: () => import('../components/profile/EditProfile.vue'),
        meta: { title: 'Редактировать профиль | Magisterium' }
      },
      {
        path: 'settings',
        name: 'AppSettings',
        component: () => import('../components/profile/AppSettings.vue'),
        meta: { title: 'Настройки приложения | Magisterium' }
      },
      {
        path: 'question-answer',
        name: 'QuestionAnswer',
        component: () => import('../components/profile/QuestionAnswer.vue'),
        meta: { title: 'Задать вопрос Наталье | Magisterium' }
      },
      {
        path: 'box',
        name: 'Box',
        component: () => import('../components/profile/Box.vue'),
        meta: { title: 'Ящик для ваших историй | Magisterium' }
      },
      {
        path: 'favorites',
        name: 'Favorites',
        component: () => import('../components/profile/Favorites.vue'),
        meta: { title: 'Избранное | Magisterium' }
      },
      {
        path: 'extend-access',
        name: 'ExtendAccess',
        component: () => import('../components/profile/ExtendAccess.vue'),
        meta: { title: 'Продление доступа | Magisterium' }
      }      
    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})



router.afterEach((to) => {
  if (to.meta.title) {
    if (to.params.username) {
      document.title = `${to.params.username} | Magisterium`
    } else {
      document.title = to.meta.title
    }
  }
})





export default router