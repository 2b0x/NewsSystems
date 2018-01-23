		layui.use('element', function() {
				var element = layui.element;
			});

			layui.use('carousel', function() {
				var carousel = layui.carousel; //建造实例
				carousel.render({
					elem: '#test1',
					width: '100%', //设置容器宽度
					arrow: 'always', //始终显示箭头
					height: '300px'
				});
			});

			var tuijian = new Array();

			//设置倒计时
			var today = new Date();
			var countDown = (countTime - today) / (1000 * 60 * 60 * 24) + 0.5;
			countDown = parseInt(countDown);
			document.getElementById('countTime').innerHTML = countDown;
			countTime = null, today = null, countDown = null; //清除内存

			//填充资讯内容
			for(var i = 0; i < 4; i++) {
				var dataContainer = ['country', 'school', 'consult', 'learnMsg'];
				fillData(i + 1, dataContainer[i]);
			}

			//填充推荐内容
			for(var i = 0; i < 4; i++) {
				var list = '<div class="bb-item"><span class="title"><i class="iconfont">○</i><a href="articleDetail.php?artId=' + tuijian[i].id + '" target="_blank">' + tuijian[i].title + '</a></span><span class="time">' + tuijian[i].date.split(' ')[0] + '</span></div>';
				$('#bottom-body').append(list);
			}
			tuijian = null; //清除内存

			//填充图书内容
			var bookdata = getBookData();
			for(var i = 0; i < 6; i++) {
				var list = '<li><em><div class="Pic" style="background-image: url(' + bookdata[i].pic + ')"></div></em><div class="bookinfo"><p><a href="bookDetail.php?bookId=' + bookdata[i].id + '"   target="_blank" >《' + bookdata[i].book_name + '》</a></p><p>' + bookdata[i].intro + '</p><p>'  + bookdata[i].date.split(' ')[0] +'</p></div></li>';
				$('#booklist').append(list);
			}
			bookdata = null;

			//填充数据函数
			function fillData(type, cont) {
				var type = type;
				var cont = '#' + cont + ' .ib-content';
				var data = getInfoData(type);
				tuijian.push(data[0]);
				if(data.length > 6) {
					for(var i = 0; i < 6; i++) {
						var list = '<li class="ib-items"><span class="dot-icon"></span><span class="ib-news"><a href="articleDetail.php?artId=' + data[i].id + '" target="_blank">' + data[i].title + '</a></span></li>';
						$(cont).append(list);
					}
				} else {
					for(var i = 0; i < data.length; i++) {
						var list = '<li class="ib-items"><span class="dot-icon"></span><span class="ib-news"><a href="articleDetail.php?artId=' + data[i].id + '" target="_blank">' + data[i].title + '</a></span></li>';
						$(cont).append(list);
					}
				}
			}

			//资讯数据请求函数
			function getInfoData(type) {
				var type = type;
				var listData;
				$.ajax({
					async: false,
					url: "publishedInfo.php",
					type: "POST",
					data: {
						type: type,
						page: 1
					},
					success: function(response, status, xhr) {
						listData = JSON.parse(response);
					}
				});
				return listData;
			}

			//图书数据请求函数
			function getBookData() {
				var listData;
				$.ajax({
					async: false,
					url: "publishedBook.php",
					type: "POST",
					data: {
						page: 1,
						num: 6
					},
					success: function(response, status, xhr) {
						listData = JSON.parse(response);
					}
				});
				return listData;
			}