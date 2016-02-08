(function () {
    'use strict';

    angular
        .module('app.sala')
        .controller('SalaController', SalaController);

    SalaController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Sala',
        'TableSettings',
        'SalaForm'];
    /* @ngInject */
    function SalaController(logger,
        $stateParams,
        $location,
        Sala,
        TableSettings,
        SalaForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Sala);
        vm.sala = {};

        vm.setFormFields = function(disabled) {
            vm.formFields = SalaForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Sala object
            var sala = new Sala(vm.sala);

            // Redirect after save
            sala.$save(function(response) {
                logger.success('Sala created');
                $location.path('sala/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Sala
        vm.remove = function(sala) {

            if (sala) {
                sala = Sala.get({salaId:sala.id}, function() {
                    sala.$remove(function() {
                        logger.success('Sala deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.sala.$remove(function() {
                    logger.success('Sala deleted');
                    $location.path('/sala');
                });
            }

        };

        // Update existing Sala
        vm.update = function() {
            var sala = vm.sala;

            sala.$update(function() {
                logger.success('Sala updated');
                $location.path('sala/' + sala.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewSala = function() {
            vm.sala = Sala.get({salaId: $stateParams.salaId});
            vm.setFormFields(true);
        };

        vm.toEditSala = function() {
            vm.sala = Sala.get({salaId: $stateParams.salaId});
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            //logger.info('Activated Sala View');
        }
    }

})();
