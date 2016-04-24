myApp.controller('rootController', ['$scope', '$http', 'SubmissionService', 'DropdownService', '$location', 'WizardHandler', function($scope, $http, SubmissionService, DropdownService, $location, WizardHandler) {
	

	
	$scope.submit = function() {
		// if (isValid) {
			console.log('Submitting to WS')
			var contributor = SubmissionService.getContributor();
			var subject = SubmissionService.getSubject();
			var physicalAppearance = SubmissionService.getPhysicalAppearance();
			var judgments = SubmissionService.getJudgments();
			var warrants = SubmissionService.getWarrants();
			var criminalHistory = SubmissionService.getCriminalHistory();

			// issue POST request
			$http({
				  method: 'POST',
				  url: '/rest/submit',
				  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				  data: {
					  testInput: "TESTING!",
					  contributor: "abc"
				  }
				}).then(function successCallback(response) {
				   console.log(response)
				  }, function errorCallback(response) {
				   console.log(response)
				  });
			
//			console.log(contributor)
//			console.log(subject)
//			console.log(physicalAppearance)
//			console.log(judgments)
//			console.log(warrants)
//			console.log(criminalHistory)
		// }
	}



	if ($location.host()=='localhost') {
		
	}

}]);