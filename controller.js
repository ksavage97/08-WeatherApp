(function() {
    'use strict';

    angular
        .module('weatherApp')
        .controller('weatherController', weatherController);

    weatherController.$inject = ['weatherFactory'];

    function weatherController(weatherFactory) {
        var vm = this;
        var cityID = vm.cityID;
        vm.searchInput = {};
        vm.searchResults = [];
        vm.inputResults = function(places) {

            vm.searchResults.push(angular.copy(places));

            weatherFactory.getWeather(places).then(
                function(data) {
                    vm.place = data;
                },
                function(error) {});
        };


    }
})();
