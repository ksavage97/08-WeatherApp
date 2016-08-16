(function() {
    'use strict';

    angular
        .module('weatherApp')
        .factory('weatherFactory', weatherFactory);

    weatherFactory.$inject = ['$http', '$q'];

    function weatherFactory($http, $q) {
        var service = {
            getWeather: getWeather
        };

        return service;

        function getWeather(cityID) {
            var deferred = $q.defer();

            $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityID + '&units=imperial&APPID=54b59343737e083268dc1e528e78ecbb').then(
                function(response) {
                    deferred.resolve(response.data);
                },
                function(err) {
                    deferred.reject(err);
                }
            );

            return deferred.promise;
        }

    }
})();
