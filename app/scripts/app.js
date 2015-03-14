'use strict';

/**
 * @ngdoc overview
 * @name donationsApp
 * @description
 * # donationsApp
 *
 * Main module of the application.
 */
angular
  .module('donationsApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
