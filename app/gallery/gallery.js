'use strict';

angular.module('myApp.gallery', ['ngRoute','ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gallery', {
    templateUrl: 'gallery/gallery.html',
    controller: 'galleryCtrl'
  });
}])

.controller('galleryCtrl', [function() {

}]);