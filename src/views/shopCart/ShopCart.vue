<template>
<div>
  <NavBar class="home-nav">
    <template v-slot:center>
      购物车({{count}})
    </template>
  </NavBar>
</div>
</template>

<script>
    import NavBar from "../../components/common/navBar/NavBar";

    export default {
        name: "ShopCart",
      data(){
        return{
          count:0
        }
      },
      components:{
          NavBar
      }
    }
</script>

<style scoped>
  .home-nav{
    background: var(--color-tint);
    color: #ffffff;
  }
</style>
