$(function(){
	/*//shop-tab tab选项卡
	$('.nav').delegate('a','click',function(){
		$(this).addClass('on').siblings('a').removeClass('on');
		var index = $(this).attr('index');
		$('.item').eq(index).addClass('on').siblings('div').removeClass('on');
	})*/
	var modular = (function(){
		var nav;
		var item;
		var s;
		return {
			inint:function(n,c,a){
				nav = $(n);
				item = $(c);
				s = a;
			},
			tab:function(){
					nav.delegate(s,'click',function(){
						$(this).addClass('on').siblings().removeClass('on');
						var index = $(this).attr('index');
						item.eq(index).addClass('on').siblings().removeClass('on');
					});
			}
		}
	}());
	modular.inint('.nav','.item','a');
	modular.tab();
})