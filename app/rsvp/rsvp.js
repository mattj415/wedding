'use strict';

angular.module('myApp.rsvp', ['ngRoute','ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rsvp', {
    templateUrl: 'rsvp/rsvp.html',
    controller: 'rsvpCtrl'
  });
}])

.controller('rsvpCtrl', [function() {
        this.active = true;
        this.email_map = {
            "matt" : {
                "display":"Matthew Johnson and Kristle McCracken!!!"
            }
        }

}]);