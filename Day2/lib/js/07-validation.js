$(document).ready(function(){
			$(':submit').click(function(){
				var hasError = true;
				var user = $(':text').val().trim();
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
				}
				return !hasError;
//				return false;
			})
		})