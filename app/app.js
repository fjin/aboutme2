'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.work',
  'myApp.research',
  'myApp.education',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/work'});
}]).
controller('FanJinCtrl', ['$scope', '$element', '$location', function($scope, $event, $location){
	var self = $scope;
	self.location = $location;

	$scope.changeView = function(path,$event){
		$($event.currentTarget.parentElement).siblings().removeClass("active");
		$($event.currentTarget.parentElement).addClass("active");
    
    $(".navbar-toggle").click();
    
	}
}]);
