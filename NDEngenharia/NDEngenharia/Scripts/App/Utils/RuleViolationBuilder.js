define(["require", "exports"], function (require, exports) {
    "use strict";
    var RuleViolationBuilder = (function () {
        function RuleViolationBuilder() {
        }
        RuleViolationBuilder.build = function (ruleViolations) {
            var message = "";
            message += "<div class='alert alert-danger'><ul>";
            for (var _i = 0, ruleViolations_1 = ruleViolations; _i < ruleViolations_1.length; _i++) {
                var ruleViolation = ruleViolations_1[_i];
                message += "<li>" + ruleViolation.Message + "</li>";
            }
            message += "</ul></div>";
            return message;
        };
        return RuleViolationBuilder;
    }());
    exports.RuleViolationBuilder = RuleViolationBuilder;
});
//# sourceMappingURL=RuleViolationBuilder.js.map