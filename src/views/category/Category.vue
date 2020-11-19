<template>
<div>
  <NavBar class="home-nav">
    <template v-slot:center>
      商品分类
    </template>
  </NavBar>
</div>
</template>

<script>
    import NavBar from "../../components/common/navBar/NavBar";

    export default {
        name: "Category",
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
