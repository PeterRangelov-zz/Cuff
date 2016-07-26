var cuff = angular.module("cuff", ['ui.mask', 'ngRoute', 'ngCookies']);

cuff.config(['$routeProvider', function($routeProvider) {
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
		.when('/terms', {
			templateUrl: 'partials/terms_and_conditions.html'
		})


}]);
