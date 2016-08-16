//controller

(function() {
    'use strict';

    angular
        .module('weatherApp')
        .controller('weatherController', weatherController);

        //injecting the factory into the controller
    	weatherController.$inject = ['weatherFactory'];



    function weatherController(weatherFactory) {
        var vm = this;
        vm.searchInput = {};
        vm.searchResults = [];

        //what happens on click   
        vm.inputResults = function(places) {

            //pushing our search into search results array
            vm.searchResults.unshift({ 'name': places, 'date': new Date() });


            //retrieving the data from the factory
            weatherFactory.getWeather(places).then(
                function(data) {
                    vm.place = data;
                },
                function(error) {});

        };


    }
})();
