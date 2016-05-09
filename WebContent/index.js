var myApp = angular.module("myApp", ['ui.utils.masks', 'ngRoute', 'ngCookies']);

//myApp.controller

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/contributor.html',
			controller: 'contributorController'
		})
		.when('/contributor', {
			templateUrl: 'partials/contributor.html',
			controller: 'contributorController'
		})
		.when('/subject', {
			templateUrl: 'partials/subject.html',
			controller: 'subjectController'
		})
		.when('/appearance', {
			templateUrl: 'partials/physical_appearance.html',
			controller: 'physicalAppearanceController'
		})
		.when('/warrants', {
			templateUrl: 'partials/warrants.html',
			controller: 'warrantsController'
		})
		.when('/judgments', {
			templateUrl: 'partials/judgments.html',
			controller: 'judgmentsController'
		})
		.when('/criminal_history', {
			templateUrl: 'partials/criminal_history.html',
			controller: 'criminalHistoryController'
		})
		.when('/submit', {
			templateUrl: 'partials/submit.html',
			controller: 'submitController'
		})
		.when('/confirmation', {
			templateUrl: 'partials/confirmation.html'
//			controller: 'submitController'
		})


}]);




var INTEGER_REGEXP = /^\-?\d+$/;
myApp.directive('integer', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.integer = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        if (INTEGER_REGEXP.test(viewValue)) {
          // it is valid
          return true;
        }

        // it is invalid
        return false;
      };
    }
  }
});