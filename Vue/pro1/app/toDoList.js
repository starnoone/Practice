var vm = new Vue({
	el:'#main',
	data:{
		tit:'',
		val:'',
		list:[
			{title:'',des:''}
		]
	},
	methods:{
		chage:function(){
			if(this.tit == /^\s+$/g || this.val ==  /^\s+$/g){
				alert('内容不能为空');
				return
			}
			this.list.push({title:this.tit,des:this.val});
			this.tit = '';
			this.val = '';
		}
	}
})