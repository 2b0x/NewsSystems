<?php
	$type = $_GET['type'];
	$test = $type;
?>


<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="renderer" content="webkit">
	  	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	  	<link rel="stylesheet" href="layui/css/layui.css"/>
	  	<link rel="stylesheet" href="css/base.css"/>
	  	<link rel="stylesheet" href="css/Cbase.css" />
	  	<link rel="stylesheet" href="css/footer.css"/>
	  	<script src="layui/layui.js" type="text/javascript" charset="utf-8"></script>
		<title>学习资讯</title>
	</head>
	
	
	<body>
		<div class="body">
			<div><?php include('headerNav.html');  ?></div>
			
			
			<div class="layui-clear"></div>
			
			<div class="main">
				<div class="unite-title">
					<h2>考研资讯</h2>
					<form class="layui-form" action="">
						<div class="search">
							<input type="text" id="date" name="username" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input">
						</div>
					    <button type="submit" class="layui-btn layui-btn-normal">搜索</button>
					</form>
				</div>
				
				<div class="main-left">
					<div class="main-l-body" id="mainBody">
						
						<?php include('list.html'); ?>
						
						
					</div>
				</div>
				
				<?php include('sideNav.html');  ?>
				
			</div>
		
			<div class="layui-clear"></div>
		
			<?php include('footer.html');  ?>
		
		</div>



	<script>
		
	</script>
	
	</body>
</html>
