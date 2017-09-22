<style scoped>
.test1{
	background-color: red;
	height: 1000px;
	font-size: 0.24rem;
}
.vux-header{
	background-color: blue;@important
}
</style>
<template>
	<div style="height:500px;overflow:scroll;" ref="test1">
	<div class="test1" ref="test">
		<x-header>This is the page title.</x-header>
		<div>test111</div>
		<div @click="test2">to test2</div>
		<input>
	</div>
	</div>
</template>
<script>
	import { XHeader } from 'vux';
	export default {
	  	name: 'test1',
	  	components: {
		    XHeader
		},
	  	data () {
	    	return {
	      		
	    	}
	  	},
	  	created:function(){
	  		console.log(this.$refs)
	  	},
	  	mounted(){
	  		console.log(this.$refs.test1.scrollTop);
	  		this.$refs.test1.scrollTop = 100;
	  	},
	  	methods:{
	  		test2(){
	  			//this.$router.push({name:'test2'})
	  			console.log(this.$refs.test1.scrollTop)
	  		}
	  	}
	}
</script>