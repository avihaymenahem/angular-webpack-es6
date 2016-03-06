"use strict";

import '../assets/css/main.scss';

let components = [];

// region Angular Includes
import angular  from 'angular';
import AngularUIRouter from 'angular-ui-router';
components.push(AngularUIRouter);
// endregion

// region Controllers
import HomeController from './components/Home/';
components.push(HomeController.name);
// endregion

routing.$inject = ['$urlRouterProvider', '$locationProvider'];

function routing($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}

angular.module('App', components).config(routing);