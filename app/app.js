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
    'ngAnimate',
    'ngTouch'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .otherwise({redirectTo: '/'})
    }])
    .controller('MenuController', [ '$location', function($location) {
        this.current_selection = '/';
        this.changeView = function() {
            //    $location.path(this.selection);

            if (this.current_selection == this.selection) {
                this.selection = '/';
                this.current_selection = this.selection;
            } else {
                this.current_selection = this.selection;
            }
            $location.url(this.current_selection);


        },
        this.uncheck = function(event){
            if ( this.selection == this.current_selection ){
                this.current_selection = '/';
                this.checked = false;
                $location.url(this.current_selection);
            }
        }
    }]);

