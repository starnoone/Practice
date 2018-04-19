var Footer = Vue.extend({
	data:function(){
		return {
			msg:'666'
		}
	},
	methods:{
		getChild:function(){
			this.$emit('childMsg',this.msg);
			//console.log(this.msg);
		}
	},
	template:'#child'
})

var vm = new Vue({
	el:'#main',
	data:{
		title:['hello']
	},
	methods:{
		setMsg:function(data){
			this.title.push(data);
			console.log(this.title);
		}
	},
	components:{
		'my-footer':Footer
	}
})