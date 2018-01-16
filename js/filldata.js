//var pages;//当前请求数据总数
//fillData();//默认将列表填充为type=1
////var p=parseInt(pages);
//	
//


layui.use('form', function(){
	var form = layui.form;
	//监听下拉事件
	form.on('select(listType)', function(data){
	  	var type = data.value; //得到被选中的值
	  	
	  	fillData(type);
	  	var p = parseInt(pages);
		layui.use('laypage', function() {
			var laypage = layui.laypage;
			
			//执行一个laypage实例
			laypage.render({
				elem: 'page' //注意，这里的 test1 是 ID，不用加 # 号
				,count: p //数据总数，从服务端得到
				,limit: 20
			});
		});
	  
	  
	});
})

//填充数据列表的请求函数	
function fillData(type,page){
	$('#bodyList').html('');
	var type=type;
	var listData;
	$.ajax({
			url: "publishedInfo.php",
			type: "POST",
			data:{
				type: type,
			},
			success: function(response, status, xhr) {
				listData = JSON.parse(response); 
				pages=listData.length;
				if(listData.length>10){
//					listLength
				}
				for(var i=0;i<listData.length;i++){
					var list = '<li><a href="">'+ listData[i].title +'</a><span class="span-time">'+ listData[i].date +'</span><a href="###" class="list-btn btnBlue">查看</a><a href="###" class="list-btn btnOrg">删除</a></li>';
					$('#bodyList').append(list);
					
				}	
			}
	});
}

function page(){
	layui.use('laypage', function() {
		var p=parseInt(pages);
		var laypage = layui.laypage;
		laypage.render({
			elem: 'page'
			,count: pages 
			,limit: 20
		});
	});
}
