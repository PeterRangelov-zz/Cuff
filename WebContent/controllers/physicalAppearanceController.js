myApp.controller('physicalAppearanceController', ['$scope', 'SubmissionService', 'DropdownService', '$location', function($scope, SubmissionService, DropdownService, $location) {
		$scope.Math = window.Math;
		$scope.races = DropdownService.getRaceList();
		$scope.nationalities = DropdownService.getNationalityList();
		$scope.eye_colors = DropdownService.getEyeColorList();
		$scope.hair_colors = DropdownService.getHairColorList();
		$scope.heights = _.range(40, 80);
		$scope.weights = _.range(80, 400)
		$scope.race;
		$scope.nationality;
		$scope.height = '70';
		$scope.weight = '180';
		$scope.hair_color;
		$scope.eye_color;
		$scope.physical_characteristics;

		 
//		$scope.refreshSlider = function () {
//        	$scope.$broadcast('rzSliderForceRender');
//    	};


//		$scope.height_slider = {
//		  value: 70,
//		  options: {
//		    floor: 48,
//		    ceil: 96,
//		    translate: function (value) {
//		    	return window.Math.floor(value / 12) + ' feet, ' + value % 12 + ' inches | ' + window.Math.round(value * 2.54) + ' cm'
//    		},
//		    hideLimitLabels: true,
//		  }
//		};
		
//		$scope.weight_slider = {
//		  value: 180,
//		  options: {
//		    floor: 90,
//		    ceil: 450,
//		    translate: function (value) {
//		    	return value + ' lbs | ' + window.Math.round(value * 0.453592) + ' kg'
//    		},
//		    hideLimitLabels: true
//		  }
//		};


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

		if ($location.host()=='localhost') {
//			$scope.race = 'Caucasian';
//			$scope.nationality = 'American';
//			$scope.hair_color = 'Brown';
//			$scope.eye_color = 'Brown';
//			$scope.preferred_contact_method = 'email';
//			$scope.physical_characteristics='scar'
		}

		
		 
	}])
;
