// Credits: https://stackoverflow.com/a/18652401/8277139.
// @expiry is in minutes
function setCookie(key, value, expiry) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (expiry * 60 * 1000));
    document.cookie = key + "=" + value + ";expires=" + expires.toUTCString();
}

function getCookie(key) {
    var keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
    return keyValue ? keyValue[2] : null;
}

function eraseCookie(key) {
    var keyValue = getCookie(key);
    setCookie(key, keyValue, "-1");
}
