'use-strict';
// Determines if application is running on Android >= 4.4 Kitkat inside a CordovaWebView
// If true inject cordova.js (android) 
var Kitkat = (function (win, kk, undefined) {
    var ua = kk.ua || navigator.userAgent,
        injected = false,
        match = ua.match(/Android\s([0-9\.]*)/),
        getAndroidVersion = function () {
            return match ? parseFloat(match[1]) : false;
        };

    if (window._cordovaNative && getAndroidVersion() >= 4.4) {
        // We have to use this ugly way to get cordova working
        //document.write('<script src="/js/cordova.js" type="text/javascript"></script>');
        injected = true;
    }
    kk.injected = injected; //export injected
    kk.ua = ua; //export ua
    return kk;
})(window, window.Kitkat || {});
