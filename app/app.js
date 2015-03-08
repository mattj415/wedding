'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.our_story',
    'myApp.gallery',
    'myApp.registry',
    'myApp.event_info',
    'myApp.rsvp',
    'myApp.version',
    'ngAnimate'
]).
config(['$routeProvider', function($routeProvider) {
      $routeProvider.otherwise({redirectTo: '/'});
}]);
