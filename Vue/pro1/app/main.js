new Vue({
	el:'#main',
	data:{
		nav1:'首页',
		nav2:'评价',
		nav3:'商家',
		state:0
	},
	methods:{
		tab:function(index){
			this.state = index;
		}
	}
})