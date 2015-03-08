'use strict';

angular.module('myApp.our_story', ['ngRoute','ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/our_story', {
    templateUrl: 'our_story/our_story.html',
    controller: 'OurStoryCtrl'
  });
}])

.controller('OurStoryCtrl', [function() {

}]);