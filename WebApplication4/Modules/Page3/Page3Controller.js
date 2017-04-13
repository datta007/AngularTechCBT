app.controller("Page3Controller", ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.myName = "Jignesh Trivedi";
    $scope.id = $routeParams.id;
    $scope.pagenum = 3;
}]);