	var isSearch=0;
			var li = $('ul.layui-nav li.layui-nav-item');
			li.removeClass('layui-this');
			$(li[2]).addClass("layui-this");
	
			dataInitialize();

			$('#countryList').attr('href','info.php?type=1');
			$('#schoolList').attr('href','info.php?type=2');
			$('#consultList').attr('href','info.php?type=3');
			$('#learnList').attr('href','info.php?type=4');
			
			
			

			$('#search').click(function(){
				var data = $('#searchData');//要搜索的数据
				var isNull = data.val().trim().replace(/\s/g,"");
				if(isNull==null||isNull==""||isNull==' '){
					alert('搜索关键字不能为空');
					
					dataInitialize();
					
					data.val('');
					data.focus();
				}else{
					isSearch = 1;
					searchBook(data.val());
				}
			});
			
			
			//查询关键字数据
			function searchBook(keyword) {
				var keyword = keyword;
				var bookdata;
				var p=1;
				$.ajax({
					async: false,
					url: "searchBook.php",
					type: "POST",
					data: {
						keyword: keyword
					},
					success: function(response, status, xhr) {
						bookdata = JSON.parse(response);
						totalPages = bookdata.length;
						
						if(totalPages==0){//查询无结果
							alert('暂无查询结果！');
						}else if(totalPages<=14){//查询结果数小于于一页
							$('#booklist').html(' ');
							for(var i = 0; i < totalPages; i++) {
								var list = '<li><em><div class="bookPic" style="background-image: url(' + bookdata[i].pic + ')"></div></em><div class="bookinfo"><p><a href="">《' + bookdata[i].book_name + '》</a></p><p>' + bookdata[i].intro + '</p><p>'  + bookdata[i].date.split(' ')[0] +'</p></div></li>';
								$('#booklist').append(list);
							}
							layui.use('laypage', function() {
								var laypage = layui.laypage;
								laypage.render({
									elem: 'page',
									count: totalPages,
									limit: 14,
									jump: function(obj, first) {
										var p = obj.curr;
										//首次不执行
										if(!first) {
												fillBook(p,14);
										}
									}
								});
								laypage.render(null, 'msg-page');
							});
						}else if(totalPages>14){//结果数大于一页
							$('#booklist').html(' ');
							for(var i = (p-1)*14; i < p*14; i++) {
								var list = '<li><em><div class="bookPic" style="background-image: url(' + bookdata[i].pic + ')"></div></em><div class="bookinfo"><p><a href="bookDetail.php?bookId=' + bookdata[i].id + '"   target="_blank">《' + bookdata[i].book_name + '》</a></p><p>' + bookdata[i].intro + '</p><p>'  + bookdata[i].date.split(' ')[0] +'</p></div></li>';
								$('#booklist').append(list);
							}
							layui.use('laypage', function() {
								var laypage = layui.laypage;
								laypage.render({
									elem: 'page',
									count: totalPages,
									limit: 14,
									jump: function(obj, first) {
										p = obj.curr;
										if(!first) {
											if(totalPages%2==0){
												$('#booklist').html(' ');
												for(var i = (p-1)*14; i < p*14; i++) {
													var list = '<li><em><div class="bookPic" style="background-image: url(' + bookdata[i].pic + ')"></div></em><div class="bookinfo"><p><a href="bookDetail.php?bookId=' + bookdata[i].id + '"   target="_blank">《' + bookdata[i].book_name + '》</a></p><p>' + bookdata[i].intro + '</p><p>'  + bookdata[i].date.split(' ')[0] +'</p></div></li>';
													$('#booklist').append(list);
												}
											}else{
												var end = Math.ceil(totalPages/14);
												if(p==end){
													$('#booklist').html(' ');
													for(var i = 14*(p-1); i < totalPages; i++) {
														var list = '<li><em><div class="bookPic" style="background-image: url(' + bookdata[i].pic + ')"></div></em><div class="bookinfo"><p><a href="bookDetail.php?bookId=' + bookdata[i].id + '"   target="_blank">《' + bookdata[i].book_name + '》</a></p><p>' + bookdata[i].intro + '</p><p>'  + bookdata[i].date.split(' ')[0] +'</p></div></li>';
														$('#booklist').append(list);
													}
												}else{
													$('#booklist').html(' ');
													for(var i = (p-1)*14; i < p*14; i++) {
														var list = '<li><em><div class="bookPic" style="background-image: url(' + bookdata[i].pic + ')"></div></em><div class="bookinfo"><p><a href="bookDetail.php?bookId=' + bookdata[i].id + '"   target="_blank">《' + bookdata[i].book_name + '》</a></p><p>' + bookdata[i].intro + '</p><p>'  + bookdata[i].date.split(' ')[0] +'</p></div></li>';
														$('#booklist').append(list);
													}
												}
											}
										}
									}
								});
								laypage.render(null, 'msg-page');
							});
						}
					}
				});
			}

			function fillBook(page, num) {
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
						var bookdata = JSON.parse(response);
						var length = bookdata.length;
						for(var i = 0; i < length; i++) {
							var list = '<li><em><div class="bookPic" style="background-image: url(' + bookdata[i].pic + ')"></div></em><div class="bookinfo"><p><a href="bookDetail.php?bookId=' + bookdata[i].id + '"   target="_blank">《' + bookdata[i].book_name + '》</a></p><p>' + bookdata[i].intro + '</p><p>'  + bookdata[i].date.split(' ')[0] +'</p></div></li>';
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
			
			//数据初始化
			function dataInitialize(){
				//请求数据填充
				fillBook(1,14);
	
				var totalPages = totalPage();
				
				//分页
				layui.use('laypage', function() {
					var laypage = layui.laypage;
					laypage.render({
						elem: 'page',
						count: totalPages,
						limit: 14,
						jump: function(obj, first) {
							var p = obj.curr;
							//首次不执行
							if(!first) {
									fillBook(p,14);
							}
						}
					});
					laypage.render(null, 'msg-page');
				});
			}