<template>
    <div class='index'>
        <div>emit1</div>
        <div>name:{{name}}</div>
    </div>
</template>
<script>
import util from '../common/util.js'
export default {
    data() {
        return {
            name:'默认'
        }
    },
    mounted(){
        console.log(util)
        util.$on('test',function(res){
            console.log('hahaha')
            this.name=res;
        }.bind(this));
    }
}
</script>
<style>
.index{
    font-size: 0.32rem;
}
</style>
