myApp.controller('physicalAppearanceController', ['$scope', 'SubmissionService', '$timeout', 'DropdownService', '$location', 'WizardHandler', function($scope, SubmissionService, $timeout, DropdownService, $location, WizardHandler) {
		$scope.races = DropdownService.getRaceList();
		$scope.nationalities = DropdownService.getNationalityList();
		$scope.eye_colors = DropdownService.getEyeColorList();
		$scope.hair_colors = DropdownService.getHairColorList();
		$scope.race;
		$scope.nationality;
		$scope.weight = 180;
		$scope.height = 70;
		$scope.hair_color;
		$scope.eye_color;
		$scope.physical_characteristics;

		 
		$scope.refreshSlider = function () {
        	$scope.$broadcast('rzSliderForceRender');
    	};


		$scope.height_slider = {
		  value: 70,
		  options: {
		    floor: 48,
		    ceil: 96,
		    translate: function (value) {
		    	return window.Math.floor(value / 12) + ' feet, ' + value % 12 + ' inches | ' + window.Math.round(value * 2.54) + ' cm'
    		},
		    hideLimitLabels: true,
		  }

		};
		$scope.weight_slider = {
		  value: 180,
		  options: {
		    floor: 90,
		    ceil: 450,
		    translate: function (value) {
		    	return value + ' lbs | ' + window.Math.round(value * 0.453592) + ' kg'
    		},
		    hideLimitLabels: true
		  }
		};


		$scope.nextStep = function(isValid) {
			console.log('Validating form. Valid? '+isValid)
			if (isValid) {
				SubmissionService.setPhysicalAppearance($scope);
				WizardHandler.wizard().next();
			}
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
