<style scoped>
.test2{
	background-color: blue;
	height: 1000px;
	font-size: 0.28rem;
}
</style>
<template>
	<div style="height:500px;overflow: scroll;">
	<div class="test2">
		<div>test222</div>
		<div @click="back">back111</div>
		<div @click="btn">111111</div>
	</div>
	</div>
</template>
<script>
	export default {
	  	name: 'test2',
	  	data () {
	    	return {
	      		
	    	}
	  	},
	  	created:function(){
	  		
	  	},
	  	methods:{
	  		back(){
	  			this.$router.goBack(1);
	  		},
	  		btn(){
	  			this.util1.$emit('test')
	  		}
	  	}
	}
</script>