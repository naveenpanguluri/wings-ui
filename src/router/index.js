import Vue from 'vue';
import Router from 'vue-router';

import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import EditBlogs from '../pages/EditBlogs';


Vue.use(Router);

export default new Router({
  scrollBehavior() {
      return { x: 0, y: 0 };
    },
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: Blogs,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/editblog/:id',
      name: 'EditBlogs',
      component: EditBlogs,
    },
    // { path: '*', component: pageNotFound },
  ],
  // scrollBehavior() {
  //   return { x: 0, y: 0 };
  // },
});
