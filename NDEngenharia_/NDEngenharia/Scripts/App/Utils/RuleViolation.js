define(["require", "exports"], function (require, exports) {
    "use strict";
    var RuleViolation = (function () {
        function RuleViolation(propertyExcepted, message) {
            this.PropertyExcepted = propertyExcepted;
            this.Message = message;
        }
        return RuleViolation;
    }());
    exports.RuleViolation = RuleViolation;
});
//# sourceMappingURL=RuleViolation.js.map