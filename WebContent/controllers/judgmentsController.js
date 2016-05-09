myApp.controller('judgmentsController', ['$scope', 'SubmissionService', 'DropdownService', '$location', function($scope, SubmissionService, DropdownService, $location) {
		$scope.judgments = [];
		$scope.municipality;
		$scope.amount;
		$scope.judgment_number;
		$scope.judgment_month = '1';
		$scope.judgment_year = '2016';

		$scope.judgment_months = _.range(1, 13);
		$scope.judgment_years = _.range(2016, 1970, -1);
		$scope.amountFilter;

		$scope.addjudgment = function(isValid, municipality, amount, judgment_number, month, year) {
			if (isValid) {
				console.log('Adding judgment... ' + municipality + amount + judgment_number + month + year )
				$scope.judgments.push({
					municipality: municipality,
					amount: amount,
					judgment_number: judgment_number,
					month: month,
					year: year
				});
			}
		};

		$scope.removejudgment = function(municipality, amount, judgment_number, month, year) {
			console.log('Removing judgment... ' + municipality + amount + judgment_number + month + year);
			var current = _.findWhere($scope.judgments, {municipality: municipality, amount: amount, judgment_number: judgment_number, month: month, year: year});
			console.log(current)
			$scope.judgments = _.without($scope.judgments, current);
		};

		$scope.previousStep = function() {
			console.log('Going back')
			$location.path('warrants')
		}
		
		$scope.nextStep = function() {
			SubmissionService.setJudgments($scope.judgments);
			$location.path('criminal_history')
		}
		
		if (!_.isEmpty(SubmissionService.getJudgments())) {
			console.log('SubmissionService contains Judgments information: ')
			var j = SubmissionService.getJudgments()
			console.log(j)
			
			$scope.judgments = j;
		}

		if ($location.host()=='localhost') {
//			$scope.judgments.push({
//				municipality: 'municipality 1',
//				amount: '1500',
//				judgment_number: '12345',
//				month: 5,
//				year: 2015
//			},
//			{
//				municipality: 'municipality 2',
//				amount: '2500',
//				judgment_number: '54321',
//				month: 1,
//				year: 2012
//			})
		}

}])