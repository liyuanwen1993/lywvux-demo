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
	<div class="test1">
		<x-header>This is the page title.</x-header>
		<div>test111</div>
		<div @click="test2">to test2</div>
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
	  		
	  	},
	  	methods:{
	  		test2(){
	  			this.$router.push({name:'test2'})
	  		}
	  	}
	}
</script>