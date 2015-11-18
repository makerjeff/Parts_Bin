// main APP js file. Includes controllers

//DEFINE THE APP: ('<referred app name>', ['<service namespace>', '<service namespace>']);
var partsBinApp = angular.module('PartsBinAppName', ['ngRoute']);


//MODAL DIRECTIVE
partsBinApp.directive('modalDialog', function() {
    return {
        restrict: 'E',
        scope: {show: '='},
        replace: true, // Replace with the template below
        transclude: true, // we want to insert custom content inside the directive
        link: function(scope, element, attrs) {
            scope.dialogStyle = {};
            if (attrs.width)
                scope.dialogStyle.width = attrs.width;
            if (attrs.height)
                scope.dialogStyle.height = attrs.height;
            scope.hideModal = function() {
                scope.show = false;
            };
        },
        templateUrl: 'templates/modal_template.html' // See below
    };
});


//configure app
partsBinApp.config(['$routeProvider', function($routeProvider){

  //navigate to the parts page
  $routeProvider.when('/parts', {
    templateUrl:'partials/parts.html',
    controller:'LocalStorageController'
  });

  $routeProvider.when('/local', {
    templateUrl:'partials/local_storage.html',
    controller:'LocalStorageController'
  });

  $routeProvider.when('/modal', {
      templateUrl:'partials/modal_practice.html',
      controller:'ModalPracticeController'
  })
  //any other location, redirect to about page
  $routeProvider.otherwise({
    redirectTo:'/parts'
  });
}]);





