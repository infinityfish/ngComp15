(function() {
  'use strict';
angular.module('app', ['ngComponentRouter', 'heroes', 'crisis-center'])

.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
})

.value('$routerRootComponent', 'app')

.component('app', {
  templateUrl: "/app/app.template.html",
//   $routeConfig: [
//     {path: '/heroes/...', name: 'Heroes', component: 'heroes'},
//   ]
  $routeConfig: [
    {path: '/crisis-center/...', name: 'CrisisCenter', component: 'crisisCenter', useAsDefault: true},
    {path: '/heroes/...', name: 'Heroes', component: 'heroes' }
  ]
});
})();