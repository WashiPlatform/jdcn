/**
 * Created by zenking on 16/6/27.
 */
angular.module('serc').filter('timestampFilter', function($filter) {
    return function (timestamp) {
        return AschJS.utils.format.fullTimestamp(timestamp);
    }
});
