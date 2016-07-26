cuff.controller('rootController', ['$scope', '$http', '$httpParamSerializerJQLike', 'SubmissionService', 'DropdownService', '$location', function($scope, $http, $httpParamSerializerJQLike, SubmissionService, DropdownService, $location) {
	
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



	if ($location.host()=='localhost') {
		
	}

}]);