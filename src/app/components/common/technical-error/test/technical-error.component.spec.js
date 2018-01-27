(function () {
    'use strict';

    describe('Technical error directive', function() {
        var DEFAULTE_ERROR_MESSAGE = 'Due to a technical problem we were unable to continue. ' +
            'Please try again or contact your administrator.';

        var $componentController;

        beforeEach(module('idam-poa.components.common.technical-error'));
        beforeEach(inject(function(_$componentController_) {
            $componentController = _$componentController_;
        }));

        describe('when message is not provided', function() {
           it('should display default message', function(){
               var bindings = {show: true};
               var ctrl = $componentController('technicalError', {}, bindings);

               expect(ctrl.show).toBe(true);
               expect(ctrl.message).toBe(DEFAULTE_ERROR_MESSAGE);
           });
        });

        describe('when message is provided', function() {
            it('should display it in the view', function(){
                var bindings = {show: true, message: 'any message'};
                var ctrl = $componentController('technicalError', {}, bindings);

                expect(ctrl.show).toBe(true);
                expect(ctrl.message).toBe('any message');
            });
        });
    });
})();
