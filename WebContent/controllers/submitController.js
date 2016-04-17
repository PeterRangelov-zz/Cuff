myApp.controller('submitController', ['$scope', 'SubmissionService', 'DropdownService', '$location', 'WizardHandler', function($scope, SubmissionService, DropdownService, $location, WizardHandler) {
	$scope.first_name;
	$scope.middle_name;
	$scope.last_name;
	$scope.aliases;
	$scope.drivers_license;
	$scope.ssn;
	$scope.dob;
	$scope.background_info;

	$scope.nextStep = function(isValid) {
		console.log('Validating form. Valid? '+isValid)
		if (isValid) {
			
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

	$scope.submit = function () {
		console.log('Submitting information...')
	}

	
}]);