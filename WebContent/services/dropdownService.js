myApp.service('DropdownService', function($http) {
	var stateList = {content:null}
	var raceList = {content:null}
	var nationalityList = {content:null}
	var eyeColorList = {content:null}
	var hairColorList = {content:null}
	var relationshipList = {content:null}

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
	
	$http.get("dropdown_values/relationship_to_subject.json").then(function(response) {
    	console.log(response.data)
    	relationshipList.content = response.data;
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
	
	this.getRelationshipList = function() {
		return relationshipList;
	}
	   


	
});