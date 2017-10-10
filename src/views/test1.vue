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
	<div style="height:500px;overflow:scroll;font-size:0.32rem;" ref="test1">
		<div class="test1" ref="test">
			<x-header>This is the page title.</x-header>
			<div>test111</div>
			<div @click="test2">to test2{{mmm}}</div>
			<div @click="to('emit1')">to emit1</div>
			<div @click="to('emit2')">to emit2</div>
		</div>
		<child :test-one.sync="test"  @increment="incrementTotal" v-model="value"></child>
		<div>test{{test}}</div>
		<div>{{value}}</div>
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
	      		test:1,
	      		mmm:'',
	      		value:''
	    	}
	  	},
	  	watch:{
	  		value(val){
	  			console.log(this)
	  		}
	  	},
	  	created:function(){
	  		console.log(this.$refs)
	  		/*setInterval(()=>{
	  			this.test++
	  		},1000)*/
	  		
	  	},
	  	mounted(){
	  		console.log(this.$refs.test1.scrollTop);
	  		this.$refs.test1.scrollTop = 100;
	  		this.util1.$on('test',()=>{
	  			console.log(1111111)
	  			this.mmm="success";
	  		})
	  	},
	  	methods:{
	  		test2(){
	  			//this.$emit('test')
	  			this.$router.push({name:'test2'})
	  			//console.log(this.$refs.test1.scrollTop)
	  		},
	  		to(name){
	  			this.$router.push({name:name})
	  		},
	  		incrementTotal(){
	  			console.log(111)
	  		}
	  	}
	}
</script>