<template>
    <div class="index">
        <div>emit2</div>
        <div @click="emit">emit btn</div>
    </div>
</template>
<script>
import util from '../common/util.js'
export default {
    data() {
        return {
            
        }
    },
    methods:{
        emit(){
            util.$emit('test','传智传智');
        }
    }
}
</script>
<style>
.index{
    font-size: 0.32rem;
}
</style>
