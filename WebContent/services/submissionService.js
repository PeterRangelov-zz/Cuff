myApp.factory('SubmissionService', function ($cookies, $cookieStore) {
    var contributor = {};
    var subject = {};
    var physicalAppearance = {};
    var judgments = {};
    var warrants = {};
    var criminalHistory = {};


    return {
        // Contributor
        getContributor: function () {
        	console.log('getting contributor from cookies')
//        	c = $cookieStore.get('contributor');
//        	console.log(c)
//            return c;
        	return contributor;
        },
        setContributor: function (newVal) {
        	console.log(newVal)
//            c = {
//        		first_name:  newVal.first_name,
//        		last_name: newVal.last_name,
//        		email_address: newVal.email_address,
//        		phone_number: newVal.phone_number,
//        		preferred_contact_method: newVal.preferred_contact_method,
//        		city: newVal.city,
//        		state: newVal.state,
//        		zipcode: newVal.zipcode
//        	};
        	contributor = {
        		entry_type: newVal.entry_type,
        		first_name:  newVal.first_name,
        		last_name: newVal.last_name,
        		email_address: newVal.email_address,
        		phone_number: newVal.phone_number,
        		preferred_contact_method: newVal.preferred_contact_method,
        		relationship: newVal.relationship,
        		city: newVal.city,
        		state: newVal.state,
        		zipcode: newVal.zipcode,
        		contact_name: newVal.contact_name,
        		contact_organization: newVal.contact_organization,
        		contact_city: newVal.contact_city,
        		contact_state: newVal.contact_state,
        		contact_phone_number: newVal.contact_phone_number,
        		contact_email_address: newVal.contact_email_address
        	};
//        	$cookieStore.put('contributor', c)
//        	console.log(c)
        },
        resetContributor: function () {
            contributor = {};
        },

        // Subject
        getSubject: function () {
            return subject;
        },
        setSubject: function (newVal) {
	    	subject = {
        		first_name:  newVal.first_name,
        		middle_name:  newVal.middle_name,
        		last_name: newVal.last_name,
        		aliases: newVal.aliases,
        		drivers_license: newVal.drivers_license,
        		ssn: newVal.ssn,
        		dob: newVal.dob,
        		background_info: newVal.background_info
        	};
        },
        resetSubject: function () {
            subject = {};
        },

        // Physical Appearance
        getPhysicalAppearance: function () {
            return physicalAppearance;
        },
        setPhysicalAppearance: function (newVal) {
        	physicalAppearance = {
        		race:  newVal.race,
        		nationality:  newVal.nationality,
        		height: newVal.height,
        		weight: newVal.weight,
        		hair_color: newVal.hair_color,
        		eye_color: newVal.eye_color,
        		physical_characteristics: newVal.physical_characteristics
        	};
        },
        resetPhysicalAppearance: function () {
            physicalAppearance = {};
        },

        // Judgments
        getJudgments: function () {
            return judgments;
        },
        setJudgments: function (newVal) {
            judgments = newVal;
        },

        // Warrants
        getWarrants: function () {
            return warrants;
        },
        setWarrants: function (newVal) {
        	console.log("setting warrants. new: ")
        	console.log(newVal)
            warrants = newVal;
        },
        resetWarrants: function () {
            warrants = {};
        },

        // Criminal History
        getCriminalHistory: function () {
            return criminalHistory;
        },
        setCriminalHistory: function (newVal) {
            criminalHistory = newVal;
        },
        resetCriminalHistory: function () {
            criminalHistory = {};
        }


    };
});