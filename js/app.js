"use strict";

var app = angular.module("MushroomMania", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'MushroomController',
      templateUrl: 'partials/mushroomPartial.html' 
    })
    .otherwise({
      redirectTo: '/'
    });
});
