import Vue from 'vue'
import Router from 'vue-router'
const Home = () =>import('../views/home/Home')
const Category =() =>import('../views/category/Category')
const Cart = () =>import('../views/cart/Cart')
const Profile = () =>import('../views/profile/Profile')
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Home'
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/Category',
      component: Category
    },
    {
      path: '/Cart',
      component: Cart
    },
    {
      path: '/Profile',
      component: Profile
    }
  ],
  mode: 'history'
})
