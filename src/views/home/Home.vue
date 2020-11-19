<template>
<div>
  <NavBar class="home-nav">
    <template v-slot:center>
      购物街
    </template>
  </NavBar>
<!--  <result></result>-->
  <SwiperA :banner="bannerList"></SwiperA>
  <list :recommend="recommendList"></list>
<!--  <Listbar></Listbar>-->
<!--  <router-view/>-->
  <ul>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li><li>1</li>
    <li>1</li><li>1</li><li>1</li>
    <li>1</li><li>1</li><li>1</li>
    <li>1</li><li>1</li><li>1</li>
    <li>1</li><li>1</li>
    <li>1</li><li>1</li><li>1</li>
    <li>1</li><li>1</li><li>1</li>
    <li>1</li><li>1</li><li>1</li>
    <li>1</li><li>1</li>
    <li>1</li><li>1</li><li>1</li>
    <li>1</li><li>1</li><li>1</li>
    <li>1</li><li>1</li><li>1</li>
    <li>1</li><li>1</li>
  </ul>

</div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";
  import {getHomeMultidata} from "network/home";
  import SwiperA from "components/common/SwiperA";
  import List from "components/common/List";
  // import Listbar from "../../components/common/listBar/Listbar";



    export default {
        name: "Home",
        components:{
          NavBar,
          SwiperA,
          List,
          // Listbar
        },
      data(){
          return{
            // result:null,
            bannerList:null,
            recommendList:null
          }
      },
      created() {
          getHomeMultidata().then(res=>{
            // this.result=res
            this.bannerList=res.data.banner.list
            this.recommendList=res.data.recommend.list
          })
      },
    }
</script>

<style scoped>
.home-nav{
  background: var(--color-tint);
  color: #ffffff;
}
</style>

