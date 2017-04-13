var app = angular.module('app',[]);

app.controller('emp', ['$scope', 'empService', function ($scope, empCalService) {

    $scope.doSEarch = function () {
        empCalService.GetEmployeeByID($scope.searchbyempno, function (result) {

            $scope.empno = result.empno;
            $scope.ename = result.ename;
            $scope.sal = result.sal;
            $scope.deptno = result.deptno;
            $scope.hiredate = result.hiredate;
        });
    };
}]);

app.service('empService', ['$http', '$log', function ($http, $log) {

    this.GetEmployeeByID = function (empno, cb) {
        $http({
            Url: '',
            method:'GET'
        }).then(
        //Success Function
        function (resp)
        {
            cb(resp.data);
        },
        //Failure Function
        function (resp)
        {
            $log.log('ERROR OCCURED');
        })
    }
}]);