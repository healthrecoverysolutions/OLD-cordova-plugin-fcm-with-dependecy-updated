import { Subject } from 'rxjs';
var FCMPluginOnIonic = (function () {
    function FCMPluginOnIonic() {
    }
    FCMPluginOnIonic.prototype.clearAllNotifications = function () {
        return window.FCM.clearAllNotifications();
    };
    FCMPluginOnIonic.prototype.createNotificationChannel = function (channelConfig) {
        return window.FCM.createNotificationChannel(channelConfig);
    };
    FCMPluginOnIonic.prototype.getAPNSToken = function () {
        return window.FCM.getAPNSToken();
    };
    FCMPluginOnIonic.prototype.getInitialPushPayload = function () {
        return window.FCM.getInitialPushPayload();
    };
    FCMPluginOnIonic.prototype.getToken = function () {
        return window.FCM.getToken();
    };
    FCMPluginOnIonic.prototype.hasPermission = function () {
        return window.FCM.hasPermission();
    };
    FCMPluginOnIonic.prototype.onNotification = function () {
        var observable = new Subject();
        window.FCM.eventTarget.addEventListener('notification', function (event) { return observable.next(event.detail); }, { passive: true });
        return observable;
    };
    FCMPluginOnIonic.prototype.onTokenRefresh = function () {
        var observable = new Subject();
        window.FCM.eventTarget.addEventListener('tokenRefresh', function (event) { return observable.next(event.detail); }, { passive: true });
        return observable;
    };
    FCMPluginOnIonic.prototype.requestPushPermission = function (options) {
        return window.FCM.requestPushPermission(options);
    };
    FCMPluginOnIonic.prototype.subscribeToTopic = function (topic) {
        return window.FCM.subscribeToTopic(topic);
    };
    FCMPluginOnIonic.prototype.unsubscribeFromTopic = function (topic) {
        return window.FCM.unsubscribeFromTopic(topic);
    };
    return FCMPluginOnIonic;
}());
export { FCMPluginOnIonic };
export var FCM = new FCMPluginOnIonic();
