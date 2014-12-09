'use strict'
//declaring modules

angular.module('Authentication',[]);
angular.module('Home', []);
angular.module('loginApp', [
    'Authentication',
    'Home',
    'ngRoute',
    'ngCookies'
])
   .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                controller:'LoginController',
                templateUrl: 'modules/header/headerfile.html',
                hideMenus: true
            })
            .when('/home', {
                controller:'HomeController',
                templateUrl: 'modules/home/views/home.html',
                hideMenus: true

            })
            .otherwise({redirectTo: '/'});

    }])

    .run(['$rootScope', '$location', '$cookieStore', '$http', function($rootScope, $location, $cookieStore, $http){
        //Keep User logged in after refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if($rootScope.globals.currentUser){
            $http.defaults.header.common['Authorization'] = 'Basic' + $rootScope.globals.currentUser.authdata
        }

        $rootScope.$on('routeChangeStart', function(event, next, current){
            // redirect to login page if not logged in
               if($location.path!=='/' && !$rootScope.globals.currentUser){
                   $location.path('/');
               };

        });
            window.alert('exiting app.js')
    }]);


