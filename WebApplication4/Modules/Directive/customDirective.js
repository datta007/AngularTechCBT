var app = angular.module("app", []);

app.controller('emp', ['$scope', function ($scope) {
     $scope.msg = 'This is message';
}]);

app.directive('myInfoMsg', function () {
    return
    {
        template: "<strong>{{msg}}</strong>"
    };
});
