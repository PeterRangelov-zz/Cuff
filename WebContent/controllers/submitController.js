myApp.controller('submitController', ['$scope', 'SubmissionService', 'DropdownService', '$http', '$location', '$httpParamSerializerJQLike', function($scope, SubmissionService, DropdownService, $http, $location, $httpParamSerializerJQLike) {
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
		$location.path('criminal_history')
	}
	
	$scope.nextStep = function(isValid) {
		console.log('Validating form. Valid? '+isValid)
		if (isValid) {
			
		}
	}

	if ($location.host()=='localhost') {
//		$scope.first_name = 'John';
//		$scope.middle_name = 'Middle';
//		$scope.last_name = 'Smith';
//		$scope.aliases = 'Aliases';
//		$scope.drivers_license = 'R-123-456-7890';
//		$scope.ssn = '123-45-6789';
//		$scope.dob = '1/1/1980';
//		$scope.background_info='Background info'
	}

	$scope.submit = function() {
		// if (isValid) {
			console.log('Submitting to WS')
			var contributor = SubmissionService.getContributor();
			var subject = SubmissionService.getSubject();
			var physicalAppearance = SubmissionService.getPhysicalAppearance();
			var warrants = SubmissionService.getWarrants();
			var judgments = SubmissionService.getJudgments();
			var criminalHistory = SubmissionService.getCriminalHistory();
			
			console.log(contributor)
			console.log(subject)
			console.log(physicalAppearance)
			console.log(warrants)

			// issue POST request
			$http({
				  method: 'POST',
				  url: '/rest/submit',
				  data: $httpParamSerializerJQLike({
					  testInput: "TESTING!",
					  contributor: JSON.stringify(contributor),
					  subject: JSON.stringify(subject),
					  physical_appearance: JSON.stringify(physicalAppearance),
					  warrants: JSON.stringify(warrants),
					  judgments: JSON.stringify(judgments)
				  })
				})
				.then(
			       function(response){
			         console.log(response.data);
			         $location.path('confirmation')
			       }, 
			       function(response){
			         console.log(response);
			    });
			
//			console.log(contributor)
//			console.log(subject)
//			console.log(physicalAppearance)
//			console.log(judgments)
//			console.log(warrants)
//			console.log(criminalHistory)
		// }
	}

	
}]);