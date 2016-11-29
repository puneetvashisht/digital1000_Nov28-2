$(document).ready(function(){
			$('#submit').click(function(){
				var hasError = true;
				var user = $(':text').val().trim();
				var pwd = $(':password').val().trim();
				var regEx = /^[a-zA-Z]+$/ 
				if(user.length === 0){
					hasError = true;
					$('#usernameError').html("Enter some name").css({'color':'red'})
				}
				else if(!regEx.test(user)){
					hasError = true;
					$('#usernameError').html("Enter valid name").css({'color':'red'})
				}
				else {
					hasError = false;
					$('#usernameError').html("");
					$.ajax({
						type:'get',
						url: './../dummyServer/loginUser.json?username='+user,
//						data: {username: user, password: pwd},
						success: function(data){
							console.log(data)
						}
					});
				}
//				return !hasError;
				return false;
			})
		})