<template>
    <div class='index'>
        <swiper loop auto :list="list" :index="index" @on-index-change="change"></swiper>
        <div @click="test">add png</div>
    </div>
</template>
<script>
import {
    Swiper
} from 'vux'
export default {
    components: {
            Swiper
        },
    data() {
        return {
            list: [],
            index:0
        }
    },
    mounted() {

    },
    methods:{
        test(){
            var res = [{
                url:"www.baidu.com",
                img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2114605024,995876269&fm=27&gp=0.jpg'
            },{
                url:"www.baidu.com",
                img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2114605024,995876269&fm=27&gp=0.jpg'
            }]
            /*for(let item in res){
                this.list.push(item)
            }*/
            this.list=res;
        },
        change(){

        }
    }
}
</script>
<style>
.index {
    font-size: 0.32rem;
}
</style>
