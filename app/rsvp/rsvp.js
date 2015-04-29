'use strict';

angular.module('myApp.rsvp', ['ngRoute','ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rsvp/:hashkey', {
    templateUrl: 'rsvp/rsvp.html',
    controller: 'rsvpCtrl'
  });
}])

.controller('rsvpCtrl', ['$routeParams','$location','$http','$q', function($routeParams, $location, $http, $q) {


        this.attending_options = [
            { label: 'Will Attend', value: "will" },
            { label: 'Will Not Attend', value: "will_not" }
        ];
        this.attending = this.attending_options[0];
        this.numberOptions = [
            { label: '1', value: 1 },
            { label: '2', value: 2 }
        ];
        this.number = this.numberOptions[0];
        this.hashkey = $routeParams.hashkey;
        this.submit = function(){
            if ( this.attending.value == 'will'){
                alert("Thanks! We look forward to seeing you at the wedding!");
            } else {
                alert("Well fuck you too!");
            }

            $location.url('/');
        };
        this.guest = undefined;
        this.getGuest = function() {
            var guest = null;
            var deferred = $q.defer();
            if (guest !== null) deferred.resolve(guest);
            $http.get('http://localhost:3000/wedding/' + this.hashkey)
                .success(function(data) {
                    console.log("got data", data);
                    if (data.length) {
                        deferred.resolve(data[0]);
                    } else {
                        deferred.reject();
                    }
                }).error(deferred.reject);
            return deferred.promise;
        };
        this.guest = this.getGuest();

}]);