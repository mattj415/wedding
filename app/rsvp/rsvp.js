'use strict';

angular.module('myApp.rsvp', ['ngRoute','ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rsvp/:hashkey', {
    templateUrl: 'rsvp/rsvp.html'
  });
}])

.controller('rsvpCtrl', ['$routeParams','$location','$http', function($routeParams, $location, $http ) {


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
        this.processForm = function(){
            $http.post('http://localhost:3000/wedding/rsvp/response/' + this.hashkey , {attending:this.attending, number:this.number}).success(function(data) { });
            if ( this.attending.value == 'will'){
  //              alert("Thanks! We look forward to seeing you at the wedding!");
            } else {
   //             alert("Well fuck you too!");
            }


     //       $location.url('/');
        };
        this.guest = undefined;
        this.guestFound = false;
        var rsvp = this;
        $http.get('http://localhost:3000/wedding/rsvp/guest/' + this.hashkey)
            .success(function (data) {
                console.log("got data", data);
                if (data.length) {
                    rsvp.guest = data[0];
                    rsvp.guestFound = true;
                } else {
                    rsvp.guestFound = false;
                }
            });

}]);