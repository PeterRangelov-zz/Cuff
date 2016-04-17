myApp.controller('rootController', ['$scope', 'SubmissionService', 'DropdownService', '$location', 'WizardHandler', function($scope, SubmissionService, DropdownService, $location, WizardHandler) {
	

	
	$scope.submit = function() {
		// if (isValid) {
			console.log('Submitting to WS')
			var contributor = SubmissionService.getContributor();
			var subject = SubmissionService.getSubject();
			var physicalAppearance = SubmissionService.getPhysicalAppearance();
			var judgments = SubmissionService.getJudgments();
			var warrants = SubmissionService.getWarrants();
			var criminalHistory = SubmissionService.getCriminalHistory();

			
			console.log(contributor)
			console.log(subject)
			console.log(physicalAppearance)
			console.log(judgments)
			console.log(warrants)
			console.log(criminalHistory)
		// }
	}



	if ($location.host()=='localhost') {
		
	}

}]);