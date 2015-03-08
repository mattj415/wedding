'use strict';

angular.module('myApp.registry', ['ngRoute','ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/registry', {
    templateUrl: 'registry/registry.html',
    controller: 'registryCtrl'
  });
}])

.controller('registryCtrl', [function() {

}]);