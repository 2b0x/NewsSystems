
if(type==5){
	type=4;
}

fillData(type,1);	

var title = ['','国家政策','院校政策','考研资讯','学习方法'];
$('#unite-title').html(title[type]);

var pages = totalPage(type);
	
//分页
layui.use('laypage', function() {
	var laypage = layui.laypage;
	laypage.render({
		elem: 'page',
		count: pages,
		limit: 20,
		jump: function(obj, first) {
			var p = obj.curr;
			//首次不执行
			if(!first) {
				$('#body-list').html('');
				$.ajax({
					async: false,
					url: "publishedInfo.php",
					type: "POST",
					data: {
						type: type,
						page: p
					},
					success: function(response, status, xhr) {
						listData = JSON.parse(response);
						var length = listData.length;
						for(var i = 0; i < length; i++) {
							var list = '<li><a href="articleDetail.php?artId=' + listData[i].id + '" target="_blank">' + listData[i].title + '</a><span class="span-time">' +  listData[i].date.split(' ')[0] + '</span></li>';
							$('#body-list').append(list);
			
						}
					}
				});
			}
		}
	});
	laypage.render(null, 'msg-page');
});


$('#search').click(function(){
	var searchData = $('#keyword');
	var isNull = searchData.val().trim().replace(/\s/g,"");
	if(isNull==null||isNull==""||isNull==' '){
		alert('搜索关键字不能为空');
		searchData.val('');
		searchData.focus();
	}else{
		var keyword = searchData.val();
		$.ajax({
			async: false,
			type: "post",
			url: "searchInfo.php",
			data: {
				type: type,
				keyword: keyword
			},
			success:function(response, status, xhr){
				datas = JSON.parse(response);				
				searchDeal(datas);			
			}
		});
		
	}
});

function searchDeal(data){
	var datas = data;
	var length = datas.length;
				
				if(length>0){
					$('#body-list').html('');
					if(length<=20){
						for(var i = 0; i < length; i++) {
							var list = '<li><a href="articleDetail.php?artId=' + datas[i].id + '" target="_blank">' + datas[i].title + '</a><span class="span-time">' +  datas[i].date.split(' ')[0] + '</span></li>';
							$('#body-list').append(list);
					
						}
						layui.use('laypage', function() {
							var laypage = layui.laypage;
							laypage.render({
								elem: 'page',
								count: length,
								limit: 20
							});
							laypage.render(null, 'msg-page');
						});
					}else{
						layui.use('laypage', function() {
							var laypage = layui.laypage;
							laypage.render({
								elem: 'page',
								count: length,
								limit: 20,
								jump: function(obj, first) {
									$('#body-list').html('');
									var p = obj.curr;
									var endPage = Math.ceil(length/20);
									if(p==endPage){
										for(var i = (p-1)*20; i < length; i++) {
											var list = '<li><a href="articleDetail.php?artId=' + datas[i].id + '" target="_blank">' + datas[i].title + '</a><span class="span-time">' +  datas[i].date.split(' ')[0] + '</span></li>';
											$('#body-list').append(list);
										}
									}else{
										for(var i = (p-1)*20; i < p*20; i++) {
											var list = '<li><a href="articleDetail.php?artId=' + datas[i].id + '" target="_blank">' + datas[i].title + '</a><span class="span-time">' +  datas[i].date.split(' ')[0] + '</span></li>';
											$('#body-list').append(list);
										}
									}
	
								}
							});
							laypage.render(null, 'msg-page');
						});
					}
				}else{
					alert('暂无查询结果');
				}
}
	
	
//填充数据列表的请求函数	
function fillData(type, page) {
	$('#body-list').html('');
	var type = type;
	var page = page;
	var listData;
	$.ajax({
		async: false,
		url: "publishedInfo.php",
		type: "POST",
		data: {
			type: type,
			page: page
		},
		success: function(response, status, xhr) {
			listData = JSON.parse(response);
			var length = listData.length;
			for(var i = 0; i < length; i++) {
				var list = '<li><a href="articleDetail.php?artId=' + listData[i].id + '" target="_blank">' + listData[i].title + '</a><span class="span-time">' +  listData[i].date.split(' ')[0] + '</span></li>';
				$('#body-list').append(list);

			}
		}
	});
}

//计算数据总条数
function totalPage(type) {
	var type = type;
	var totalPage;
	$.ajax({
		async: false,
		url: "totalInfo.php",
		type: "POST",
		data: {
			type: type
		},
		success: function(response, status, xhr) {
			totalPage = JSON.parse(response)[0];
		}
	});
	return totalPage;
}
