var map = new BMap.Map("container");          // 创建地图实例  
var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
map.centerAndZoom(point, 15); 
map.enableScrollWheelZoom(true);



$('#MapBtn').click(function(){
	console.log(1);
	var opt = $('#opt');
	if(opt.html()=='+'){
		opt.html('-');
	}else{
		opt.html('+');
	}
	$('#container').slideToggle('slow');
});