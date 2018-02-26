define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var filepaths = [
        'dynamicExternalFile'
    ];
    function appTest() {
        console.log('this is the app test in the appFile');
        var path = "external/" + filepaths[0];
        new Promise(function (resolve_1, reject_1) { require([path], resolve_1, reject_1); }).then(function (external) {
            console.log('we have the file dynamically');
            external.test();
        });
    }
    exports.appTest = appTest;
});
//# sourceMappingURL=appFile.js.map