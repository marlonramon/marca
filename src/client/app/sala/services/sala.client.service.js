(function() {
    'use strict';

    angular
        .module('app.sala')
        .factory('Sala', Sala);

    Sala.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Sala($resource, API_BASE_URL) {

        var params = {
            salaId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/sala/:salaId';

        return $resource(API_URL, params, actions);

    }

})();
