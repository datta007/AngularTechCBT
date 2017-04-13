var app = angular.module("app", []);
app.controller('emp', ['$scope','calcFactory', function ($scope,calcFactory) {
    $scope.a = 10;
    $scope.b = 20;
    //Synchronouz Way to call FActory method
    //$scope.doSum = function ()
    //{
    //    $scope.sum=calcFactory.getSum($scope.a, $scope.b);
    //};

    $scope.doSum = function ()
    {
        calcFactory.getSum($scope.a, $scope.b, function (result) {
            $scope.sum = result;
        });
    };
}]);

app.factory('calcFactory', ['$http', '$log', function ($http,$log) {
    $log.log("Instantiating CalcFactory....");
    var oCalcService = {};

    //Synchronous way to call factory function
    //oCalcService.getSum = function (a, b)
    //{
    //    return parseInt(a)+parseInt(b);
    //};

    //Asynchronos way to make callback function
    ////oCalcService.getSum = function (a, b, cb) {
    ////    var r = parseInt(a) + parseInt(b);
    ////    cb(r);
    ////};

    //By using $HTTP
    oCalcService.getSum = function (a, b, cb) {
        $http({
            url: 'http://localhost:4467/Sum?a=' + a + ' &b=' + b,
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
}]);

