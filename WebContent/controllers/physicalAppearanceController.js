myApp.controller('physicalAppearanceController', ['$scope', 'SubmissionService', 'DropdownService', '$location', function($scope, SubmissionService, DropdownService, $location) {
		$scope.Math = window.Math;
		$scope.races = DropdownService.getRaceList();
		$scope.nationalities = DropdownService.getNationalityList();
		$scope.eye_colors = DropdownService.getEyeColorList();
		$scope.hair_colors = DropdownService.getHairColorList();
		$scope.heights = _.range(40, 80);
		$scope.weights = _.range(80, 400);
		
		$scope.race;
		$scope.nationality;
		$scope.height;
		$scope.weight;
		$scope.hair_color;
		$scope.eye_color;
		$scope.physical_characteristics;

		$scope.previousStep = function() {
			console.log('Going back')
			$location.path('subject')
		}
		
		$scope.nextStep = function(isValid) {
			console.log('Validating form. Valid? '+isValid)
			console.log($scope)
			console.log($scope.height)
			if (isValid) {
				SubmissionService.resetPhysicalAppearance();
				SubmissionService.setPhysicalAppearance($scope);
				$location.path('warrants')
			}
		}
		
		if (!_.isEmpty(SubmissionService.getPhysicalAppearance())) {
			console.log('SubmissionService contains PhysicalAppearance information: ')
			var pa = SubmissionService.getPhysicalAppearance()
			console.log(pa)
			
			$scope.race = pa.race;
			$scope.nationality = pa.nationality;
			$scope.height = pa.height;
			$scope.weight = pa.weight;
			$scope.hair_color = pa.hair_color;
			$scope.eye_color = pa.eye_color;
			$scope.physical_characteristics = pa.physical_characteristics;
		}
		
		if ($location.host()=='localhost') {
			$scope.race = 'Caucasian';
			$scope.nationality = 'American';
			$scope.hair_color = 'Brown';
			$scope.eye_color = 'Brown';
			$scope.preferred_contact_method = 'email';
			$scope.physical_characteristics='scar'
		}

		
		 
	}])
;
