var app  = angular.module('computer', ['ngRoute']); // name of our application

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/main', {
	        templateUrl: 'main.html',
	        controller: 'MainCtrl'
	    }).
        when('/about', {
            templateUrl: 'about.html',
            controller: 'MainCtrl'
        }).
        when('/services', {
            templateUrl: 'services.html',
            controller: 'ServicesCtrl'
        }).
        when('/contact', {
            templateUrl: 'contact.html',
            controller: 'ContactCtrl'
        }).
        otherwise( {
            redirectTo:'/main'
        })
}]);

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('json/services.json').then(function(response) {
        console.log(response);
        $scope.services = response.data;
    });
}]);

app.controller('ServicesCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('json/services.json').then(function(response) {
        console.log(response);
        $scope.services = response.data;
    });
}]);

app.controller('ContactCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('json/locations.json').then(function(response) {
        console.log(response);
        $scope.locations = response.data;
    });
}]);