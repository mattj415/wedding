'use strict';

describe('myApp.our_story module', function() {

  beforeEach(module('myApp.our_story'));

  describe('our_story controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var OurStoryCtrl = $controller('OurStoryCtrl');
      expect(OurStoryCtrl).toBeDefined();
    }));

  });
});