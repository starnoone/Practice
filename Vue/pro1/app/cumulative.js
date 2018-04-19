var vm = new Vue({
	el:'#main',
	data:{
		n:0,
		rst:0
	},
	methods:{
		count:function(i){
			if(i<1){
				return 0;
			}
			return this.rst = parseInt(i) + this.count(i-1)
		}
	}
})
	
	