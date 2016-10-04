/*File Name:app.js
Created By:Hamid Raza Noori
date:21/09/2016
Purpose:Model of IPL Application and give the different states
*/

angular.module("myApp", ["firebase", "angular-carousel-3d", "ui.router", "ngMaterial", "ngImageCache"])
    .config(function($stateProvider, $urlRouterProvider,$sceDelegateProvider,ImageCacheProvider,$httpProvider) {

      //Make Access from all Scheme eg.http,https etc
      $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

    // Use localStorage instead of sessionStorage
        ImageCacheProvider.setStorage(window.localStorage)

        /*It set my Firebase Database Whitelisted*/
        $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'https://firebasestorage.googleapis.com/v0/b/ipl-project-aa084.appspot.com/**'
  ]);


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
