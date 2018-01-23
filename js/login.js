		
		var verNum = 0;
		$(document).ready(function() {
			//粒子背景特效
			$('body').particleground({
				dotColor: '#5cbdaa',
				lineColor: '#5cbdaa'
			});
			createCode();
		});
			
		$('#loginBtn').click(function(){
			var status = validate(verNum);
			if(status==1){
				var userEmail = $('#userEmail').val();
				var passWord = $('#passWord').val();
				$.ajax({
					type:"post",
					url:"checkLogin.php",
					async:false,
					data: {
						userEmail: userEmail,
						passWord: passWord
					},
					success:function(response, status, xhr){
						if(response==1){
							alert('登录成功');
							window.location.href="index.php";
						}else{
							alert('登录失败，请检查帐号及密码正确性');
						}
					}
				});
			}
			
		})
		
		
		function logins(){
			var status = validate(verNum);
			if(status == 1){
				console.log(1);
				return true;
			}else{
				console.log(0);
				return false;
			}
		}