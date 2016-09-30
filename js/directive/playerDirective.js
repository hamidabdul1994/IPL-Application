// File Name:playerDirective.js
// Created By:Hamid Raza Noori
// date:27/09/2016
// Purpose:To Declare the Directives

angular.module("myApp")
    .directive("navigation", function() { //navigation directive to display the navigation menu
        return {
            restrict: "E",
            templateUrl: "view/navigation.html"
        };
    })
    .directive("myCardImage", function() { //myCardImage directive to arrange the imagecard
        return {
            restrict: "E",
            templateUrl: "view/cardImage.html",
            scope: {
                team: "=", //to declare the scope variables
                index: "="
            },
            controller: "teamInfoCtrl"
        };
    });
