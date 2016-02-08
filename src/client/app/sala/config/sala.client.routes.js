(function() {
    'use strict';

    angular
        .module('app.sala')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listSala',
                config: {
                    url: '/sala',
                    templateUrl: 'app/sala/views/list.html',
                    controller: 'SalaController',
                    controllerAs: 'vm',
                    title: 'List Salas',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> Salas'
                    }
                }
            },
            {
                state: 'createSala',
                config: {
                    url: '/sala/create',
                    templateUrl: 'app/sala/views/create.html',
                    controller: 'SalaController',
                    controllerAs: 'vm',
                    title: 'Create Sala'
                }
            },
            {
                state: 'viewSala',
                config: {
                    url: '/sala/:salaId',
                    templateUrl: 'app/sala/views/view.html',
                    controller: 'SalaController',
                    controllerAs: 'vm',
                    title: 'View Sala'
                }
            },
            {
                state: 'editSala',
                config: {
                    url: '/sala/:salaId/edit',
                    templateUrl: 'app/sala/views/edit.html',
                    controller: 'SalaController',
                    controllerAs: 'vm',
                    title: 'Edit Sala'
                }
            }
        ];
    }
})();
