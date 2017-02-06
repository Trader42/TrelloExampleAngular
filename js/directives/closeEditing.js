/**
 * Created by e1400482 on 31.1.2017.
 */
angular.module("app").directive("closeEditing", function () {
    var KEYS = {
        ESCAPE: 27
    };

    return {
        scope: {
            isEditing: "="
        },
        link:function (scope, element, attrs) {
            element.on("keyup", function (e) {
                if (_.isEqual(e.keyCode, KEYS.ESCAPE)){
                    scope.isEditing = false;
                    scope.$apply();
                }
            });
        }
    };
});
