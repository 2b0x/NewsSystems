//右侧导航栏
var datas = ["publishedInfo.html",
	"newPublishInfo.html",
	"publishedBook.html",
	"newPublishBook.html",
	"communityManage.html",
	"countDown.html"
];
var main_box = document.getElementsByClassName('main-body')[0];
var dd = document.getElementsByTagName('dd');
for(var index = 0; index < dd.length; index++) {
	(function(index) {
		dd[index].onclick = function() {
			$.post(datas[index], 
				function(data) {
					var htmlobj = data;
					var mainBody = $('#mainBody');
					mainBody.html('');
					mainBody.html(htmlobj);
				});
		};
	})(index);
}

