// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic-material', 'starter.controllers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })
    .state('app.registerNew', {
        url: '/registerNew',
        views: {
            'menuContent': {
                templateUrl: 'templates/registerNew.html',
                controller: 'ListsCtrl'
            }
        }
    })
    .state('app.myAccount', {
        url: '/myAccount',
        views: {
            'menuContent': {
                templateUrl: 'templates/myAccount.html',
                controller: 'ListsCtrl'
            }
        }
    })

    .state('app.lists', {
        url: '/lists',
        views: {
            'menuContent': {
                templateUrl: 'templates/lists.html',
                controller: 'ListsCtrl'
            }
        }
    })

    .state('app.ink', {
        url: '/ink',
        views: {
            'menuContent': {
                templateUrl: 'templates/ink.html',
                controller: 'InkCtrl'
            }
        }
    })

    .state('app.location', {
        url: '/location',
        views: {
            'menuContent': {
                templateUrl: 'templates/location.html',
                controller: 'location'
            }
        }
    })

    .state('app.menu', {
        url: '/menu',
        views: {
            'menuContent': {
                templateUrl: 'templates/components.html',
                controller: 'ComponentsCtrl'
            }
        }
    })
    .state('app.submenu', {
        url: '/submenu',
        views: {
            'menuContent': {
                templateUrl: 'templates/submenu.html'
                //controller: 'subMenuCtrl'
            }
        }
    })

    .state('app.items', {
        url: '/items',
        views: {
            'menuContent': {
                templateUrl: 'templates/items.html'
                //controller: 'itemCtrl'
            }
        }
    })

    .state('app.extensions', {
        url: '/extensions',
        views: {
            'menuContent': {
                templateUrl: 'templates/extensions.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })
    //Author Ezhilarasan T
    .state('app.contactus', {
        url: '/contactus',
        views: {
            'menuContent': {
                templateUrl: 'templates/contactus.html',
                controller: 'contactUsCtrl'
            }
        }
    })

    .state('app.aboutus', {
        url: '/aboutus',
        views: {
            'menuContent': {
                templateUrl: 'templates/Aboutus.html',
                //controller: 'contactUsCtrl'
            }
        }
    })
    .state('app.gallery', {
        url: '/gallery',
        views: {
            'menuContent': {
                templateUrl: 'templates/gallery.html',
                //controller: 'contactUsCtrl'
            }
        }
    })
    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                //controller: 'contactUsCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});
