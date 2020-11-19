<template>
  <div class="list-bar-item" @click="itemClick">
  <div :style="activeStyle">
    <slot name="slot-text"></slot>
  </div>
  </div>

</template>

<script>
    export default {
        name: "List-bar-item",
      data(){
          return{
            // activeStyle:false
          }
      },
      computed:{
          activeStyle() {
            return this.itemClick()?{color:this.activeColor}:{};
          }
      },
      props:{
          path:String,
          activeColor:{
            type:String,
            default:'deepSkyblue'
          }
      },
      methods:{
        itemClick() {
          console.log('okokooko')
          this.$router.push(this.path)

        }
      }
    }
</script>

<style scoped>
  .list-bar-item{
    text-align: center;
    height: 30px;
  }

</style>
