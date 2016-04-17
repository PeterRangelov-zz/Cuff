myApp.controller('warrantsController', ['$scope', 'SubmissionService', 'DropdownService', '$location', 'WizardHandler', function($scope, SubmissionService, DropdownService, $location, WizardHandler) {
	$scope.warrants = [];
	$scope.municipality;
	$scope.charge;
	$scope.warrant_number;
	$scope.month = '1';
	$scope.year = '2016';

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

	$scope.nextStep = function() {
			SubmissionService.setWarrants($scope);
			WizardHandler.wizard().next();
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