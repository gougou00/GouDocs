(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	// 创建主模块
	var demoApp = angular.module('MyToDoMvc', []);
	// 创建控制器
	demoApp.controller('MainController', ['$scope', function ($scope) {
		function getId () {
			var id = Math.random();
			for (var i = 0; i < $scope.todos.length; i++) {
				if ($scope.todos[i].id === id) {
					id = getId();
					break;
				}
			}
			return id;
		}
		
		// 文本框模型
		$scope.text = '';
		// 任务列表
		$scope.todos = [
			{ id: 1, text: '太极', completed: false },
			{ id: 2, text: '咏春', completed: false },
			{ id: 3, text: '形意', completed: true }
		];
		// 添加todo
		$scope.add = function () {
			$scope.todos.push({
				// auto
				id: getId(),
				text: $scope.text,
				completed: false
			});
			$scope.text = '';
		};
		// 删除功能
		$scope.remove = function (id) {
			for (var i = 0; i < $scope.todos.length; i++) {
				if ($scope.todos[i].id === id) {
					$scope.todos.splice(i, 1);
					break;
				}
			}
		};

	}]);

})(window);
