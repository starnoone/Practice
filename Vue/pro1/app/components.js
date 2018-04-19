Vue.component('child',{
	template:'#child',
	data:function(){
		return {
			msg:'666'
		}
	},
	methods:{
		addMsg:function(){
			this.$emit('childEvt',this.msg)
		}
	}
});
var vm = new Vue({
	el:'#main',
	data:{
		title:[]
	},
	methods:{
		getMsg:function(msg){
			this.title.push(msg)
		}
	}
})