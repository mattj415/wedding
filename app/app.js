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
        $routeProvider
            .otherwise({redirectTo: '/'})
    }])
    .controller('MenuController', [ '$location', function($location) {
        this.changeView = function(){
        //    $location.path(this.selection);
            if ( this.selection == 'gallery'){
                $location.url('/');
            } else {
                $location.url(this.selection);
            }

        }
    }]);

