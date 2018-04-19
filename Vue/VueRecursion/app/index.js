//分类数据
var vm = new Vue({
	el:'#main',
	data:{
		categories:[{
			id:'1',
			title:'食品',
			pid:'0'
		},{
			id:'101',
			title:'肉',
			pid:'1'
		},{
			id:'205',
			title:'丝瓜',
			pid:'102'
		},{
			id:'201',
			title:'鸡肉',
			pid:'101'
		},{
			id:'202',
			title:'鸭肉',
			pid:'101'
		},{
			id:'301',
			title:'鲫鱼',
			pid:'203'
		},{
			id:'303',
			title:'大白菜',
			pid:'204'
		},{
			id:'102',
			title:'蔬菜',
			pid:'1'
		},{
			id:'302',
			title:'小白菜',
			pid:'204'
		},{
			id:'203',
			title:'鱼肉',
			pid:'101'
		},{
			id:'204',
			title:'白菜',
			pid:'102'
		}],
		cateArr:[],
		cateHtml:'',
		title:'水果',
		id:'103',
		pid:'1'
	},
	methods:{
		//整理数据结构
		getCateArr:function(e,pid ='0',level=0){
			var _this = this;
			this.categories.map(function(val,k){
				if(val.pid===pid){
					_this.cateArr.push(val);
					val.level = level;
					_this.getCateArr('',val.id,level+1);
				}
			})
		},
		//生成页面结构
		getCateHtml:function(){
			this.cateArr = [];
			this.cateHtml = '';
			this.getCateArr();
			var _this = this;
			this.cateArr.map(function(item,key){
				_this.cateHtml += '<li>'+_this.setLevel(item.level)+item.title+'</li>';
			});

		},
		//添加level前缀
		setLevel:function(i,w = '*'){
			i *= 2;
			var temp = '';
			for(var k=0;k<i;k++){
				temp+=w;
			}
			return temp
		},
		//将新输入的数据添加到数据结构中
		addCate:function(){
			this.categories.push({title:this.title,id:this.id,pid:this.pid});
			this.getCateHtml();
		}

	},
	created:function(){
		this.getCateHtml();
	}
})