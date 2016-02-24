'use strict';

/**
 * @ngdoc function
 * @name buttonExerciseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the buttonExerciseApp
 */
angular.module('buttonExerciseApp')
  .controller('MainCtrl', function ($scope) {
   $scope.name= 'button created';
  $scope.types="btn btn-success";
  $scope.typee="btn btn-danger";
  $scope.fnError=function(){
    alert("Error occured");
  }
  $scope.fnSuccess=function(){
    alert("Successful");
  }
})
.directive('customButton',function(){ 
    return {
        template: '<button >{{name}}</button>',
        replace: true,
        scope: {
            name: '=buttoname',
            types: '@',
            typee: '@',
            fnError: '&',
            fnSuccess: '&'
        },
    };
});


 