myApp.controller('contributorController', ['$scope', 'SubmissionService', 'DropdownService', '$location', 'WizardHandler', function($scope, SubmissionService, DropdownService, $location, WizardHandler) {
	$scope.first_name;
	$scope.last_name;
	$scope.city;
	$scope.state = 'AL';
	$scope.zipcode;
	$scope.states = DropdownService.getStateList();
	$scope.email_address;
	$scope.phone_number;
	$scope.preferred_contact_method='email';

	
	$scope.nextStep = function(isValid) {
			console.log('Validating form. Valid? '+isValid)
			if (isValid) {
				SubmissionService.setContributor($scope);
				WizardHandler.wizard().next();
			}
		}



	if ($location.host()=='localhost') {
		$scope.first_name = 'John';
		$scope.last_name = 'Smith';
		$scope.city = 'City';
		$scope.state = 'AL';
		$scope.zipcode = 51423;
		$scope.states = DropdownService.getStateList();
		$scope.email_address = 'me@xyz.com';
		$scope.phone_number = '670-394-1231';
		$scope.preferred_contact_method = 'email';
	}
}]);