var pages; //当前请求数据总数
var countItem;
var type = 1;
var p = 1;

fillData(1, 1); //默认将列表填充为type=1
pages = totalPage(1);

//分页
layui.use('laypage', function() {
	var laypage = layui.laypage;
	laypage.render({
		elem: 'page',
		count: pages,
		limit: 20,
		jump: function(obj, first) {
			p = obj.curr;
			//首次不执行
			if(!first) {
				fillData(1, p);
			}
		}
	});
	laypage.render(null, 'msg-page');
});

//更换资讯请求
layui.use('form', function() {
	var form = layui.form;
	//监听下拉事件
	form.on('select(listType)', function(data) {
		type = data.value; //得到被选中的值
		fillData(type);
		var pages = totalPage(type);
		layui.use('laypage', function() {
			var laypage = layui.laypage;

			//执行一个laypage实例
			laypage.render({
				elem: 'page',
				count: pages //数据总数，从服务端得到
					,
				limit: 20,
				jump: function(obj, first) {
					p = obj.curr; //获取当前页数
					//首次不执行
					if(!first) {
						fillData(type, p);
					}
				}
			});
		});
	});
	form.render(null, 'msg-type-form');
})

//填充数据列表的请求函数	
function fillData(type, page) {
	$('#bodyList').html('');
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
				var list = '<li><a href="articleDetail.php?artId=' + listData[i].id + '" target="_blank">' + listData[i].title + '</a><span class="span-time">' + listData[i].date + '</span><a href="articleDetail.php?artId=' + listData[i].id + '" target="_blank" class="list-btn btnBlue">查看</a><a href="javascript:void(0);" class="list-btn btnOrg infoDel" data-id="' + listData[i].id + '">删除</a></li>';
				$('#bodyList').append(list);

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