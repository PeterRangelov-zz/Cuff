myApp.controller('contributorController', ['$scope', 'SubmissionService', 'DropdownService', '$location', '$cookies', function($scope, SubmissionService, DropdownService, $location, $cookies) {
	$scope.entry_type='new';
	$scope.first_name;
	$scope.last_name;
	$scope.city;
	$scope.state;
	$scope.zipcode;
	$scope.states = DropdownService.getStateList();
	$scope.relationships = DropdownService.getRelationshipList();
	$scope.email_address;
	$scope.phone_number;
	$scope.preferred_contact_method='email';
	$scope.relationship;
	
	$scope.nextStep = function(isValid) {
			console.log('Validating form. Valid? '+isValid)
			if (isValid) {
				SubmissionService.setContributor($scope);
				$location.path('subject')
			}
		}

	if (!_.isEmpty(SubmissionService.getContributor())) {
		console.log('SubmissionService contains Contribuor information: ')
		var c = SubmissionService.getContributor()
		console.log(c)
		
		$scope.first_name = c.first_name
		$scope.last_name = c.last_name
		$scope.city = c.city;
		$scope.state = c.state;
		$scope.zipcode = c.zipcode;
		$scope.email_address = c.email_address;
		$scope.phone_number = c.phone_number;
		$scope.preferred_contact_method = c.preferred_contact_method;
		$scope.relationship = c.relationship;
	}


	if ($location.host()=='localhost') {
//		$scope.first_name = 'John';
//		$scope.last_name = 'Smith';
//		$scope.city = 'City';
//		$scope.state = 'AL';
//		$scope.zipcode = 51423;
//		$scope.states = DropdownService.getStateList();
//		$scope.email_address = 'me@xyz.com';
//		$scope.phone_number = '670-394-1231';
//		$scope.preferred_contact_method = 'email';
	}
}]);