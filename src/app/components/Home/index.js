"use strict";

import './HomeStyle.scss';
import HomeRoute        from './HomeRoute';
import HomeController   from './HomeController';

HomeController.$inject = ['$scope'];

export default angular.module('App.Controllers.Home', [])
    .config(HomeRoute)
    .controller('HomeController', HomeController);