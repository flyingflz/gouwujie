<template>
    <div id="listbar">
      <ListBarItem path="/home/pop" active-color="red">
        <template v-slot:solt-text>
          <div>流行</div>
        </template>
      </ListBarItem>
      <ListBarItem path="/pop" active-color="red">
        <template v-slot:solt-text>
          <div>流行</div>
        </template>
      </ListBarItem>
      <ListBarItem path="/pop" active-color="red">
        <template v-slot:solt-text>
          <div>流行</div>
        </template>
      </ListBarItem>
    </div>
</template>

<script>
  import ListBarItem from './List-bar-item'
    export default {
        name: "Listbar",
      components:{
          ListBarItem
      }
    }
</script>

<style scoped>
  #listbar {
    width: 100%;
    display: flex;
    justify-content: space-around;
    color: #666666;
  }

</style>
