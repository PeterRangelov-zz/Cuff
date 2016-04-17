myApp.factory('SubmissionService', function () {
    var contributor = {};
    var subject = {};
    var physicalAppearance = {};
    var judgments = {};
    var warrants = {};
    var criminalHistory = {};


    return {
        // Contributor
        getContributor: function () {
            return contributor;
        },
        setContributor: function (newVal) {
            contributor = newVal;
        },
        resetContributor: function () {
            contributor = {};
        },

        // Subject
        getSubject: function () {
            return subject;
        },
        setSubject: function (newVal) {
            subject = newVal;
        },
        resetSubject: function () {
            subject = {};
        },

        // Physical Appearance
        getPhysicalAppearance: function () {
            return physicalAppearance;
        },
        setPhysicalAppearance: function (newVal) {
            physicalAppearance = newVal;
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