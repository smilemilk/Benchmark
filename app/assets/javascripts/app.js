/**
 * The app module, as both AngularJS as well as RequireJS module.
 * Splitting an app in several Angular modules serves no real purpose in Angular 1.2.
 * (Hopefully this will change in the near future.)
 * Splitting it into several RequireJS modules allows async loading. We cannot take full advantage
 * of RequireJS and lazy-load stuff because the angular modules have their own dependency system.
 */
define(['angular', 'benchmark'], function(angular) {
  'use strict';

  // We must already declare most dependencies here (except for common), or the submodules' routes
  // will not be resolved
  return angular.module('app', ['benchmark.dashboard', 'matchmedia-ng']).config(['matchmediaProvider', function (matchmediaProvider) {
      matchmediaProvider.rules.phone = "(max-width: 768px)";
      matchmediaProvider.rules.tablet = "(max-width: 992px)";      
      matchmediaProvider.rules.desktop = "(max-width: 1920px)";
   }]);
});
