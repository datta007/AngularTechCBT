var app = angular.module("app", []);
app.controller('emp', ['$scope', 'calcService', function ($scope, calcService) {

    $scope.a = 10;
    $scope.b = 20;
    
    $scope.doSum = function ()
    {
        calcService.getSum($scope.a, $scope.b, function (r) {
            $scope.sum = r;
        });
    };
}]);

app.provider('calcService', function () {
    var baseUrl = '';

    this.config = function (Url)
    {
        baseUrl = url;
    };
    this.$get = ['$log', '$http', function ($log, $http) {
        $log.log("Instantiating calcService....");
        var oCalcService = {};

        oCalcService.getSum = function (a, b, cb) {
            $http({
                url: baseUrl+'/Sum?a=' + a + ' &b=' + b,
                method: 'GET'
            }).then(
     function (resp) {
         $log.log(resp.data);
         cb(resp.data);
     },
     function (resp) {
         $log.error("ERROR Occcured");
     });
        };
        return oCalcService;
    }];
  
});

app.config(['calcServiceProvider', function (calcServiceProvider) {
    calcServiceProvider.config('http://localhost:4467');
}]);

