/*File Name:teamInfoCtrl.js
Created By:Hamid Raza Noori
date:25/09/2016
Purpose:To Control the Team Infomation data
*/
var app = angular.module("myApp")
    .controller("teamInfoCtrl", function($scope, $firebase, $stateParams, $timeout, $mdDialog, teamCache, teamSevice) {
              $scope.teamDetails=[];
            var i = 0;
            var teamName = $stateParams.teamname;
            var myTeamCache = teamCache.get(teamName);

            if (myTeamCache) {
                console.log("Team cached");
                $scope.teamDetails = myTeamCache;
            } else {
                console.log("Team Not-Cached");
                teamSevice.firebaseCall(teamName, function(database) {
                    angular.forEach(database, function(value, key) {
                        teamSevice.getMyImage(value, "player_img_url", function(url, teamObj) {
                            $timeout(function(){
                              $scope.teamDetails.push({
                                'src': url,
                                'playerName': teamObj.player_name,
                                'playerDOB': teamObj.player_dob,
                                'playerBattingStyle': teamObj.player_batting_style,
                                'playerBowlingStyle': teamObj.player_bowling_style,
                                'playerRole': teamObj.player_role
                            });
                          },10);
                        });
                    })
                });
              }


                $scope.$watch("teamDetails", function(newTeam, oldTeam) {
                    teamCache.put(teamName, newTeam);
                });

                $scope.showAlert = function(ev, index, team) {

                    /*Appending dialog to document.body to cover sidenav in docs app
                      Modal dialogs should fully cover application
                      to prevent interaction outside of dialog*/

                    var id = '#a' + index; /*Fetch the unique ID from html form*/
                    $mdDialog.show(
                        $mdDialog.alert()
                        .parent(angular.element(document.querySelector(id)))
                        .clickOutsideToClose(true)
                        .title(team.playerName)
                        .textContent(team.playerRole)
                        .ariaLabel(team.playerDOB)
                        .ok('Got it!')
                        .targetEvent(ev)
                    );
                }; /*showAlert method end*/
            });
        /*teamInfoCtrl Controller end*/
