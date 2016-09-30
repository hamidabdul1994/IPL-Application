// File Name:app.js
// Created By:Hamid Raza Noori
// date:21/09/2016
// Purpose:Model of IPL Application and give the different states

angular.module("myApp", ["firebase", "angular-carousel-3d", "ui.router" ,"ngMaterial"])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
            url: '/home',
            templateUrl: 'view/teamname.html',
           controller: 'teamNameCtrl'
        })

        // PlayerInfo PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('playerinfo', {
            url: '/playerinfo?teamname',
            templateUrl: 'view/teaminfo.html',
            controller: 'teamInfoCtrl'
        });
    });
