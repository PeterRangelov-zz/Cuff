myApp.controller('criminalHistoryController', ['$scope', 'SubmissionService', '$location', function($scope, SubmissionService, $location) {
		$scope.entries = [];
		$scope.municipality;
		$scope.charge;
		$scope.month;
		$scope.year;

		$scope.months = _.range(1, 13);
		$scope.years = _.range(2016, 1970, -1);

		// handle Add Entry function
		$scope.addEntry = function(isValid, municipality, charge, month, year) {
			if (isValid) {
				console.log('Adding entry... ' + municipality + charge + month + year )
				$scope.entries.push({
					municipality: municipality,
					charge: charge,
					month: month,
					year: year
				});
			}
			
		};

		$scope.removeEntry = function(municipality, charge, month, year) {
			console.log('Removing entry... ' + municipality + charge +  + month + year);
			var current = _.findWhere($scope.entries, {municipality: municipality, charge: charge, month: month, year: year});
			console.log(current)

			$scope.entries = _.without($scope.entries, current);
		};
		
		$scope.previousStep = function() {
			console.log('Going back')
			$location.path('judgments')
		}

		$scope.nextStep = function() {
			SubmissionService.setCriminalHistory($scope.entries);
			$location.path('submit')
		}
		
		if (!_.isEmpty(SubmissionService.getCriminalHistory())) {
			console.log('SubmissionService contains Criminal History information: ')
			var ch = SubmissionService.getCriminalHistory()
			console.log(ch)
			
			$scope.entries = ch;
		}


		if ($location.host()=='localhost') {
			$scope.entries.push({
				municipality: 'municipality1',
				charge: 'charge',
				month: 5,
				year: 2015
			},
			{
				municipality: 'municipality2',
				charge: 'charge',
				month: 1,
				year: 2012
			})
		}

		
}])