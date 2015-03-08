'use strict';

angular.module('myApp.event_info', ['ngRoute','ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/event_info', {
    templateUrl: 'event_info/event_info.html',
    controller: 'event_infoCtrl'
  });
}])

.controller('event_infoCtrl', [function() {

}]);