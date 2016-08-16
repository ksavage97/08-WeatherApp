//factory

(function() {
    'use strict';

    angular
        .module('weatherApp')
        .factory('weatherFactory', weatherFactory);

        //injecting parameters to the factory
    weatherFactory.$inject = ['$http', '$q'];

    function weatherFactory($http, $q) {
        var service = {
            getWeather: getWeather
        };

        return service;

        function getWeather(places) {
            var deferred = $q.defer();

            //communicating with the api
            $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + places + '&units=imperial&APPID=54b59343737e083268dc1e528e78ecbb').then(
                function(response) {
                    deferred.resolve(response.data);
                },
                function(err) {
                    deferred.reject(err);
                }
            );

            //returns the array
            return deferred.promise;
        }

    }
})();
