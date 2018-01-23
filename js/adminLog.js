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
				var adminAccount = $('#adminAccount').val();
				var adminPSW = $('#adminPSW').val();
				$.ajax({
					type:"post",
					url:"checkAdmin.php",
					async:false,
					data: {
						adminAccount: adminAccount,
						adminPSW: adminPSW
					},
					success:function(response, status, xhr){
						if(response==1){
							alert('登录成功');
							window.location.href="admin.php";
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