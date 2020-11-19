<template>
    <div class="list" v-for="item in recommend">
        <img :src="item.image">
    </div>
    <div class="list" v-for="item in recommend">
        <p>{{item.title}}</p>
    </div>

    <div class="list" v-for="item in recommend">
        <img :src="item.image">
     </div>
    <div class="list" v-for="item in recommend">
        <p>{{item.title}}</p>
    </div>
</template>

<script>
    export default {
        name: "List",
        props:{
          recommend:{
            type:Array
          },
        },
        mounted() {

        }
    }
</script>

<style scoped>
  .list img{
    /*display: flex;*/
    /*justify-content: space-around;*/
    float: left;
    width: 20%;
    margin-left: 2.5%;
    margin-right: 2.5%;

  }
  .list p{
    /*display: flex;*/
    /*justify-content: space-around;*/
    float: left;
    width: 20%;
    margin-left: 2.5%;
    margin-right: 2.5%;
    margin-bottom: 20px;
    text-align: center;
  }
</style>
