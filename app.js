/*File Name:app.js
Created By:Hamid Raza Noori
date:21/09/2016
Purpose:Model of IPL Application and give the different states
*/

angular.module("myApp", ["firebase", "angular-carousel-3d", "ui.router", "ngMaterial", "ngImgCache", "angular-cache"])
    .config(function($stateProvider, $urlRouterProvider,CacheFactoryProvider) {

        /*Setting the Lifetime of cache*/
        angular.extend(CacheFactoryProvider.defaults, {
            maxAge: 15 * 60 * 1000
        });
        var teamCache;

        /* Check to make sure the cache doesn't already exist*/
        // if (!CacheFactory.get('teamCache')) {
        //     teamCache = CacheFactory('teamCache');
        // }
        console.log(teamCache);

        $urlRouterProvider.otherwise('/home');

        $stateProvider

        /* HOME STATES AND NESTED VIEWS ========================================*/
            .state('home', {
            url: '/home',
            templateUrl: 'view/teamname.html',
            controller: 'teamNameCtrl'
        })

        /* PlayerInfo PAGE AND MULTIPLE NAMED VIEWS =================================*/
        .state('playerinfo', {
            url: '/playerinfo?teamname',
            templateUrl: 'view/teaminfo.html',
            controller: 'teamInfoCtrl'
        });
    });
