var app = angular.module("AngularApp", ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/page1', {
            templateUrl: 'Page1/page1.html',
            controller: 'Page1Controller'
        }).
        when('/page2', {
            templateUrl: 'Page2/page2.html',
            controller: 'Page2Controller'
        }).
        when('/page3/:id', {
            templateUrl: 'Page3/page3.html',
            controller: 'Page3Controller'
        }).
        otherwise({
            redirectTo: '/page1'
        });
  }]);