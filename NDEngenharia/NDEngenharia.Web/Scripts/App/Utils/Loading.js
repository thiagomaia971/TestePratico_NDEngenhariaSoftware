define(["require", "exports"], function (require, exports) {
    "use strict";
    var Loading = (function () {
        function Loading() {
        }
        Loading.getLoading = function () {
            return "<div class='loading-circle'></div>";
        };
        return Loading;
    }());
    exports.Loading = Loading;
});
//# sourceMappingURL=Loading.js.map