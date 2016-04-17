var myApp = angular.module("myApp", ["mgo-angular-wizard", "rzModule", "angular-inview", 'ui.utils.masks']);





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