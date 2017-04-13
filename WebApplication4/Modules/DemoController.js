app.controller("demoController", ['$scope','$rootScope', function ($scope, $rootScope) {
    $scope.myName = "Jignesh Trivedi";
    $scope.employeeArray = [
    { name: 'Tejas' },
    { name: 'Jignesh' },
    { name: 'Rakesh' },
    { name: 'Nirav' },
    { name: 'Jiten' },
    { name: 'Varun' },
    { name: 'Chirag' }
    ];
    $scope.empName = "j";
    $rootScope.pagenum = 1;
}]);