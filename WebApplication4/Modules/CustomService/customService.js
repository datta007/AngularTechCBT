var app = angular.module("app", []);
app.controller('emp', ['$scope', 'calcService', function ($scope, calcService) {

    $scope.a = 10;
    $scope.b = 20;
    
    $scope.doSum = function ()
    {
        calcService.getSum($scope.a, $scope.b, function (result) {
            $scope.sum = result;
        });
    };
}]);

app.service('calcService', ['$http', '$log', function ($http, $log) {

    $log.log("Instantiating CalcService....");
        
    //this.getSum = function (a, b, cb)
    //{
    //    var c = parseInt(a) + parseInt(b);
    //    cb(c);
    //};

    this.getSum = function (a, b, cb) {
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

    
    
}]);

