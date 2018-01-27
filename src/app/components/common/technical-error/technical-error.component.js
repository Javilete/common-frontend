(function () {
    'use strict';

    angular
        .module('idam-poa.components.common.technical-error', [])
        .component('technicalError', {
            bindings: {
                show: '<',
                message: '@?'
            },
            templateUrl: 'app/components/common/technical-error/technical-error.tpl.html',
            controller: function() {
                var DEFAULT_MESSAGE = 'Due to a technical problem we were unable to continue. ' +
                    'Please try again or contact your administrator.';

                this.message = this.message ? this.message : DEFAULT_MESSAGE;
            }
        });
}());
