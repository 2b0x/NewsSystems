//选择倒计时
function showTime() {
	var a = document.getElementById('test1');
	var date1 = new Date();
	var date2 = new Date(a.value);
	var dates = Math.round((date2.getTime() - date1.getTime()) / (24 * 60 * 60 * 1000));
	if(dates <= 0) {
		document.getElementById('show').innerHTML = '当前未选择日期';
		alert('选择的日期不能为当前日期之前的');
		$(a).val('');
		return false;

	} else {
		document.getElementById('show').innerHTML = '距离考研还有' + dates + '天';
	}
}


//插入新的倒计时
var countBtn = document.getElementById('countDownBtn');
countBtn.addEventListener('click', function() {
	var dateBtn = document.getElementById('test1');
	var nowtime = dateBtn.value; //获取设置的时间
	nowtime = new Date(nowtime);
	var timestamp = Date.parse(nowtime); //转化为时间戳
//	console.log(timestamp);
	$.post('countDown.php', {
			timestamp: timestamp,
		},
		function(data) {
			if(data == 1) {
				alert("倒计时设置成功");
			} else {
				document.getElementById('show').innerHTML = '当前未选择日期';
				alert("请选择有效时间");
			}
		}
	);
})