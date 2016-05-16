myApp.controller('warrantsController', ['$scope', 'SubmissionService', 'DropdownService', '$location', function($scope, SubmissionService, DropdownService, $location) {
	$scope.warrants = [];
	$scope.municipality;
	$scope.charge;
	$scope.warrant_number;
	$scope.month;
	$scope.year;

	$scope.warrant_months = _.range(1, 13);
	$scope.warrant_years = _.range(2016, 1970, -1);

	// handle Add Warrant function
	$scope.addWarrant = function(isValid, municipality, charge, warrant_number, month, year) {
		if (isValid) {
			console.log('Adding warrant... ' + municipality + charge + warrant_number + month + year )
			$scope.warrants.push({
				municipality: municipality,
				charge: charge,
				warrant_number: warrant_number,
				month: month,
				year: year
			});
		}
	};

	$scope.removeWarrant = function(municipality, charge, warrant_number, month, year) {
		console.log('Removing warrant... ' + municipality + charge + warrant_number + month + year);
		var current = _.findWhere($scope.warrants, {municipality: municipality, charge: charge, warrant_number: warrant_number});
		console.log(current)

		$scope.warrants = _.without($scope.warrants, current);
	};

	$scope.previousStep = function() {
		console.log('Going back')
		$location.path('appearance')
	}
	
	$scope.nextStep = function() {
		SubmissionService.setWarrants($scope.warrants);
		$location.path('judgments')
	}
	
	if (!_.isEmpty(SubmissionService.getWarrants())) {
		console.log('SubmissionService contains Warrants information: ')
		var w = SubmissionService.getWarrants()
		console.log(w)
		
		$scope.warrants = w;
	}

	if ($location.host()=='localhost') {
		$scope.warrants.push({
			municipality: 'municipality1',
			charge: 'charge',
			warrant_number: '12345',
			month: '5',
			year: '2015'
		},
		{
			municipality: 'municipality2',
			charge: 'charge',
			warrant_number: '54321',
			month: '1',
			year: '2012'
		})
	}

		
}])