var app = angular.module('chatroom', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
 
}]);

app.config(function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
});
