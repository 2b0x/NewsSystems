	var p = 1;
	var pages = totalPage();
	fillBook(p,10);

	layui.use('laypage', function() {
		var laypage = layui.laypage;
		laypage.render({
			elem: 'page',
			count: pages,
			limit: 10,
			jump: function(obj, first) {
				p = obj.curr;
				//首次不执行
				if(!first) {
					fillBook(p,10);

				}
			}
		});
		laypage.render(null, 'msg-page');
	});

	//删除资讯请求
	$('#booklist').on('click', '.bookDel', function() {
		var bookId = $(this).attr('data-id');
		$.ajax({
			async: false,
			url: "delBook.php",
			type: "POST",
			data: {
				bookId: bookId
			},
			success: function(response, status, xhr) {
				var status = response;
				if(status == 0) {
					alert("删除失败！");
				} else {
					alert("删除成功！");
					fillBook(p,10);
				}
			}
		});
	});

	function fillBook(page,num) {
		$('#booklist').html('');
		var pages = page;
		var num = num;
		$.ajax({
			async: false,
			url: "publishedBook.php",
			type: "POST",
			data: {
				page: pages,
				num: num
			},
			success: function(response, status, xhr) {
				var listData = JSON.parse(response);
				var length = listData.length;
				for(var i = 0; i < length; i++) {
					var list = '<li><em><div class="bookPic" style="background-image: url(' + listData[i].pic + ');"></div></em><div class="bookinfo"><p><a href="bookDetail.php?bookId=' + listData[i].id + '"   target="_blank" class="title">《' + listData[i].book_name + '》</a></p><p>' + listData[i].intro + '</p><p>' + listData[i].date + '</p></div><a href="bookDetail.php?bookId=' + listData[i].id + '"   target="_blank" class="btnBlue list-btn">查看</a><a href="javascript:void(0);" class="btnOrg list-btn bookDel" data-id="' + listData[i].id + '">删除</a></li>';
					$('#booklist').append(list);
				}
			}
		});
	}

	//计算数据总条数
	function totalPage() {
		var totalPage;
		$.ajax({
			async: false,
			url: "totalBook.php",
			type: "POST",
			success: function(response, status, xhr) {
				totalPage = JSON.parse(response)[0];
			}
		});
		return totalPage;
	}