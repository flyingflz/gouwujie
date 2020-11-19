import { createRouter, createWebHashHistory } from 'vue-router'

const Category=()=>import("@/views/category/Category")
const Home=()=>import("@/views/home/Home")
const Profile=()=>import("@/views/profile/Profile")
const ShopCart=()=>import("@/views/shopCart/ShopCart")

// const Pop=()=>import("@/views/home/pop/Pop")
// const New=()=>import("@/views/home/sell/Sell")
// const Sell=()=>import("@/views/home/new/New")

const routes = [
  {path:'',redirect:'/home'},
  {
    path: '/home',
    component:Home,
    // children:[
    //   {path: '',redirect:'/home'},
    //   {path: 'pop',component:Pop},
    //   {path: 'sell',component:Sell},
    //   {path:'new',component:New}
    // ]
  },
  {path: '/profile',component:Profile},
  {path: '/shopCart',component:ShopCart},
  {path: '/category',component:Category},


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
