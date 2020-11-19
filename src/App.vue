<template>
  <div>
<!--  <div id="nav">-->
    <Tabbar></Tabbar>
    <router-view/>
  </div>
</template>

<script>
  import Tabbar from "./components/common/tabbar/Tabbar";
  // import Cpn1 from "./components/Cpn1";
  export default {
    name:'App',
    components:{
      Tabbar
    }
  }
</script>


<style>
  @import "assets/css/base.css";

</style>
