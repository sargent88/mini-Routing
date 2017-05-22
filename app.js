angular.module('myApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home/home.html',
            controller: 'homeCtrl'
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'settings/setting.html',
            controller: 'settingCtrl'
        })
        .state('products', {
            url: '/products/:type',
            templateUrl: 'products/product.html',
            controller: 'productCtrl'
        })
})