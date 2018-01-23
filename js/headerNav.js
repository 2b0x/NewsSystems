	layui.use('element', function() {
			var element = layui.element;
		});
	
		layui.use('carousel', function() {
			var carousel = layui.carousel;
			//建造实例
			carousel.render({
				elem: '#test1',
				width: '100%' //设置容器宽度
					,
				arrow: 'always' //始终显示箭头
					,
				height: '300px'
				//,anim: 'updown' //切换动画方式
			});
		});
	
	var main_box = document.getElementsByClassName('main-l-body')[0];
	var dd = document.getElementsByClassName('nav')[0].getElementsByTagName('dd');
	for (var index=0; index < dd.length; index++) {
		(function (index) {
			dd[index].onclick = function () {
//				1 2 3 5
				var unite_title=['国家政策','院校政策','考研咨询','','学习方法'];
				if(index==1 || index==2 || index==3 || index==4 || index==5){
					
					document.getElementsByClassName('unite-title')[0].getElementsByTagName('h2')[0].innerHTML=unite_title[index-1];
					type=index;
				}
 
				var _url;
				if(index==1 || index==2 || index==3 || index==4 || index==5){
					_url='list.php';
					$.get( _url ,
					{
						type:index
					},
					function(data){
						var htmlobj = data;
						var mainBody = $('#mainBody');
				        mainBody.html('');
				        mainBody.html(htmlobj);
					});
				}
				
				
				
				
//				console.log(index);
				
			};
		})(index);
	}