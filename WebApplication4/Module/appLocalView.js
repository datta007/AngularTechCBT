var app = angular.module("AngularApp", ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/page4', {
            templateUrl: 'page4.html',
            controller: 'Page1Controller'
        }).
        when('/page5', {
            templateUrl: 'page5.html',
            controller: 'Page2Controller'
        }).
        otherwise({
            redirectTo: '/page4'
        });
  }]);