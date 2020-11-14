<template>
    <div class="tab-bar-item" @click="itemClick">
<!--        <img src="../../assets/img/2.png" alt="">-->
<!--        <div>首页</div>-->
        <slot v-if="!isActived" name="slot-img"></slot>
        <!--        为了便于切换，我们预留一个插槽用于切换图片-->
        <slot v-else name="slot-active-img"></slot>
        <div :style="activeStyle">
            <slot name="slot-text"></slot>
        </div>
<!--        我们在这里给文字添加一个div用于设置它被点击在之后文字颜色发生变化-->
<!--        设置：style="activeStyle"，在js处写写入activestyle的-->
<!--        详细方法：通过三目运算符设置是否进行相应的变化。-->
<!--        与此同时我们在App.vue中加入active-color来设置一个颜色与js进行传递-->
    </div>



</template>

<script>
    export default {
        name: "tab-bar-item",
        data(){
            return{
                // isActived:false
            }
        },
        computed:{
             isActived(){
                 return this.$route.path.indexOf(this.path)!==-1
             },
             activeStyle(){
                 return this.isActived?{color:this.activeColor}:{}
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
            itemClick(){
                console.log('hhhhh')
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
    /*@import "../../assets/css/base.css";*/
    .tab-bar-item{
        text-align: center;
        height: 49px;/* 移动端底部导航栏的固定像素，一般都是49px */
    }
</style>
