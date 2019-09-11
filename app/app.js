// JavaScript Document
var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider.when("/test", {
		templateUrl: "routes/test.html"
	})
})


app.controller('todoCtrl', function($scope, $http) {
			$scope.todoName = "Todo Application";
			$scope.todos = [];
			function fetchTodos() {
				$http.get('http://192.168.0.10:3000/todos').then(function(response) {
					console.log('response ', response)
					$scope.todos = response.data.todos
				})
			}
			fetchTodos()
			$scope.addTodo = function() {
				$scope.todos.push({name: $scope.todoInput, complete: false});
			}
			$scope.incomplete = function() {
				var count = 0;
				for(var i=0; i<$scope.todos.length;i++){
					if($scope.todos[i].complete == false) {
						count++
					}
				
				} 
				return count;
			}
			
			$scope.warning= function() {
				if($scope.incomplete() > 3) {
					return "warning-lebel"
				}
			}
});