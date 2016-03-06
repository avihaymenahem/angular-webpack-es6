"use strict";

HomeRoute.$inject = ['$stateProvider'];

export default function HomeRoute($stateProvider) {
    $stateProvider.state('home', {
        url:        '/',
        controller: 'HomeController',
        template:   require('./HomeView.html')
    });
}