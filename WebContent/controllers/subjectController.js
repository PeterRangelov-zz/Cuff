myApp.controller('subjectController', ['$scope', 'SubmissionService', 'DropdownService', '$location', function($scope, SubmissionService, DropdownService, $location) {
	$scope.first_name;
	$scope.middle_name;
	$scope.last_name;
	$scope.aliases;
	$scope.drivers_license;
	$scope.ssn;
	$scope.dob;
	$scope.background_info;

	$scope.previousStep = function() {
		console.log('Going back')
		$location.path('contributor')
	}
	
	$scope.nextStep = function(isValid) {
		console.log('Validating form. Valid? '+isValid)
		if (isValid) {
			SubmissionService.setSubject($scope);
			$location.path('appearance')
		}
	}

	if ($location.host()=='localhost') {
		$scope.first_name = 'John';
		$scope.middle_name = 'Middle';
		$scope.last_name = 'Smith';
		$scope.aliases = 'Aliases';
		$scope.drivers_license = 'R-123-456-7890';
		$scope.ssn = '123-45-6789';
		$scope.dob = '1/1/1980';
		$scope.background_info='Background info'
	}

	
}]);