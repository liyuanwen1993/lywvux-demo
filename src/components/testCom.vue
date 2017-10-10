<!-- 组件封装功能 -->
<template>
    <div style="font-size:0.32rem;">
        <div>Com111{{testOne}}</div>
        <div @click="add">Comadd{{num}}</div>
        <input ref='input' :value='value' @input='updateValue($event.target.value)'>
    </div>
</template>
<script>
export default {
    props: {
        testOne: {
            type: [String, Number],
            default: '默认名称'
        },
        value :{
            type: [String],
            default:'aa'
        }
    },
    data() {
        return {
            /*testOne:this[test-one]?'test-one':""*/
            num: 0
        }
    },
    methods: {
        add() {
            this.num++;
            this.$emit('increment');
            /*var val=this.testOne+1;
            this.$emit('update:testOne', val)
            console.log(val)*/
        },
        updateValue(value){
            this.$emit('input', value)
        }
    },
    created(){
        
    },
    mounted(){
        setInterval(()=>{
            var val=this.testOne+1;
            this.$emit('update:testOne', val)
        },1000);
    },
    computed: {
        
    }
}
</script>
<style>
.vux-demo {
    text-align: center;
}

.logo {
    width: 100px;
    height: 100px
}
</style>
