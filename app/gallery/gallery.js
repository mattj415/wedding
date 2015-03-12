'use strict';

angular.module('myApp.gallery', ['ngRoute','ngAnimate','ngTouch'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gallery', {
    templateUrl: 'gallery/gallery.html',
    controller: 'galleryCtrl'
  });
}])

.controller('galleryCtrl', [function() {
        // Set of Photos
        this.photos = [
            {src: 'img/1a.jpg', desc: 'Image 01'},
            {src: 'img/2a.jpg', desc: 'Image 01'},
            {src: 'img/3a.jpg', desc: 'Image 01'},
            {src: 'img/4a.jpg', desc: 'Image 01'},
            {src: 'img/5a.jpg', desc: 'Image 01'},
            {src: 'img/6a.jpg', desc: 'Image 01'},
            {src: 'img/7a.jpg', desc: 'Image 01'}

        ];

        // initial image index
        this._Index = 0;

        // if a current image is the same as requested image
        this.isActive = function (index) {
            return this._Index === index;
        };

        // show prev image
        this.showPrev = function () {
            this._Index = (this._Index > 0) ? --this._Index : this.photos.length - 1;
        };

        // show next image
        this.showNext = function () {
            this._Index = (this._Index < this.photos.length - 1) ? ++this._Index : 0;
        };

        // show a certain image
        this.showPhoto = function (index) {
            this._Index = index;
        };
}]);

