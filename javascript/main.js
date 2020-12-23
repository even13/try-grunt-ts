var myHelper;
(function (myHelper) {
    var Language = (function () {
        function Language() {
        }
        Language.Greeting = "Bonjour";
        return Language;
    }());
    myHelper.Language = Language;
})(myHelper || (myHelper = {}));
console.log(myHelper.Language.Greeting + " World");
//# sourceMappingURL=main.js.map