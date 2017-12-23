<?php
	
	$test = $_POST['type'];
	
?>

<div class="publishedInfo">
						<div class="search">
							<input type="text" id="date" name="username" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input">
							<button type="submit" class="layui-btn layui-btn-normal">搜索</button>
						</div>
						<div class="type">
							<select name="">
								<option value="">国家政策</option>
								<option value="">院校政策</option>
								<option value="">考研资讯</option>
								<option value="">学习方法</option>
							</select>
						</div>
						<div class="main-l-body">
								<ul class="body-list">
									<li>
										<a href="">天津大学获批为教育部博士研究生教育综合改革试点单位</a>
										<span class="span-time">2017-11-09</span>
										<a href="###" class="list-btn btnBlue">查看</a>
										<a href="###" class="list-btn btnOrg">删除</a>
									</li>
									<li><a href="">长治医学院附属医院暨研究生培养基地揭牌</a><span class="span-time">2017-11-09</span></li>
									<li><a href="">安徽理工大学与安徽科技学院校签署联合培养硕士研究生协议</a><span class="span-time">2017-11-09</span></li>
									<li><a href="">上海音乐学院将首招弦乐和声乐方向博士生</a><span class="span-time">2017-11-09</span></li>
									<li><a href="">西南交通大学唐山研究生院揭牌 首批65名研究生入学</a><span class="span-time">2017-11-09</span></li>
									<li><a href="">天津大学获批为教育部博士研究生教育综合改革试点单位</a><span class="span-time">2017-11-09</span></li>
									<li><a href="">长治医学院附属医院暨研究生培养基地揭牌</a><span class="span-time">2017-11-09</span></li>
									<li><a href="">安徽理工大学与安徽科技学院校签署联合培养硕士研究生协议</a><span class="span-time">2017-11-09</span></li>
									<li><a href="">上海音乐学院将首招弦乐和声乐方向博士生</a><span class="span-time">2017-11-09</span></li>
									<li><a href="">西南交通大学唐山研究生院揭牌 首批65名研究生入学</a><span class="span-time">2017-11-09</span></li>
									<li><a href="">天津大学获批为教育部博士研究生教育综合改革试点单位</a><span class="span-time">2017-11-09</span></li>
									<li><a href="">长治医学院附属医院暨研究生培养基地揭牌</a><span class="span-time">2017-11-09</span></li>
									<li><a href="">安徽理工大学与安徽科技学院校签署联合培养硕士研究生协议</a><span class="span-time">2017-11-09</span></li>
									<li><a href="">上海音乐学院将首招弦乐和声乐方向博士生</a><span class="span-time">2017-11-09</span></li>
									<li><a href="">西南交通大学唐山研究生院揭牌 首批65名研究生入学</a><span class="span-time">2017-11-09</span></li>
									<li><a href="">天津大学获批为教育部博士研究生教育综合改革试点单位</a><span class="span-time">2017-11-09</span></li>
									<li><a href="">长治医学院附属医院暨研究生培养基地揭牌</a><span class="span-time">2017-11-09</span></li>
									<li><a href="">安徽理工大学与安徽科技学院校签署联合培养硕士研究生协议</a><span class="span-time">2017-11-09</span></li>
									<li><a href=""><?php echo $test;  ?></a><span class="span-time">2017-11-09</span></li>
								</ul>
								<div id="page" class="page"></div>
						</div>
					</div>
				
	<script>
			layui.use('laypage', function(){
			  var laypage = layui.laypage;
			    //执行一个laypage实例
			  laypage.render({
			    elem: 'page' //注意，这里的 test1 是 ID，不用加 # 号
			    ,count: 50 //数据总数，从服务端得到
			  });
			});
			
			
	</script>
	


