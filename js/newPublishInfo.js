var E = window.wangEditor;
	var editor = new E('#div1', '#div2');
	var $text1 = $('#text1');
	editor.customConfig.menus = [
		'head', // 标题
		'bold', // 粗体
		'link', // 插入链接
		'justify', // 对齐方式
		'quote', // 引用
		'image', // 插入图片
		'code', // 插入代码
		'undo', // 撤销
		'redo' // 重复
	];
	editor.customConfig.uploadImgShowBase64 = true;
	editor.customConfig.onchange = function(html) {
		// 监控变化，同步更新到 textarea
		$text1.val(html);
	}
	editor.create();
	// 初始化 textarea 的值
	$text1.val(editor.txt.html());


	var btn = document.getElementById('newPublish');

	btn.onclick = function() {
		var title = $('#title');
		var type = $('#type').val();
		var content = $('#text1');

		$.post('newPublishInfo.php', {
				title: title.val(),
				type: type,
				content: content.val()
			},

			function(data) {
				//					console.log(data);
				//					2类型不能为空  1内容不能为空  3发布成功
				if(data == 1) {
					alert('文章标题和内容不能为空！');
				} else if(data == 2) {
					alert('请选择文章类型！');
				} else if(data == 3) {
					$('#type option')[0].selected = true;
					title.val('');
					editor.txt.html('');
					alert('发布成功！');
				}
			});
	};