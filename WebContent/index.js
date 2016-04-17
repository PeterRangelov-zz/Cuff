var myApp = angular.module("myApp", ["mgo-angular-wizard", "rzModule", "angular-inview", 'ui.utils.masks']);

myApp.service('DropdownService', function($http) {
	var stateList = {content:null}
	var raceList = {content:null}
	var nationalityList = {content:null}
	var eyeColorList = {content:null}
	var hairColorList = {content:null}

	$http.get("dropdown_values/states.json").then(function(response) {
    	console.log(response.data)
    	stateList.content = response.data;
	});

	$http.get("dropdown_values/races.json").then(function(response) {
    	console.log(response.data)
    	raceList.content = response.data;
	});

	$http.get("dropdown_values/nationalities.json").then(function(response) {
    	console.log(response.data)
    	nationalityList.content = response.data;
	});

	$http.get("dropdown_values/eye_colors.json").then(function(response) {
    	console.log(response.data)
    	eyeColorList.content = response.data;
	});

	$http.get("dropdown_values/hair_colors.json").then(function(response) {
    	console.log(response.data)
    	hairColorList.content = response.data;
	});


	this.getStateList = function() {
		return stateList;
	}

	this.getRaceList = function() {
		return raceList;
	}

	this.getNationalityList = function() {
		return nationalityList;
	}

	this.getEyeColorList = function() {
		return eyeColorList;
	}

	this.getHairColorList = function() {
		return hairColorList;
	}
	   


	
});

var INTEGER_REGEXP = /^\-?\d+$/;
myApp.directive('integer', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.integer = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        if (INTEGER_REGEXP.test(viewValue)) {
          // it is valid
          return true;
        }

        // it is invalid
        return false;
      };
    }
  }
});