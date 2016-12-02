var app = angular.module('pollApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when("/polls", {
		templateUrl: "template/pollList.html",
		controller: "listCtrl"
	})
	.when("/newPoll", {
		templateUrl: "template/newPoll.html", 
		controller: "newCtrl"
	})
	.otherwise({
		redirectTo: "/polls"
	})
});

app.controller('listCtrl', function($scope, $http){
	$http({
			method: 'get',
			url: '/list'
		}).success(function(res){
			console.log('response is here');
			console.log(res);
			if(res.success){
				$scope.polls = res.pollList;
			}
		}).error(function(xhr, message, status){
			console.log("some error on server");
			console.log(xhr);
			console.log(message);
			console.log(status);
		});
});

app.controller('newCtrl', function($scope, $http){
	$scope.poll = {
		question: '',
		choices: [
			{choice: ""},
			{choice: ""}
		]
	};
	$scope.addChoice = function(){
		$scope.poll.choices.push({choice: ""})
	}
	$scope.createPoll = function(){
		$http({
			method: 'post',
			url: '/create',
			data: $scope.poll,
		}).success(function(res){
			console.log('response is here');
			console.log(res);
			if(res.success){
				$scope.poll = {
					question: '',
					choices: [
						{choice: ""},
						{choice: ""}
					]
				};
			}
		}).error(function(xhr, message, status){
			console.log("some error on server");
			console.log(xhr);
			console.log(message);
			console.log(status);
		});
	}
});




