// File Name:teamInfoCtrl.js
// Created By:Hamid Raza Noori
// date:25/09/2016
// Purpose:To Control the Team Infomation data

var app = angular.module("myApp")
    .controller("teamInfoCtrl", function($scope, $firebase, $stateParams, $timeout, $mdDialog) {

        var teamName = $stateParams.teamname;

        //Refference to take data from Firebase Database
        var ref = firebase.database().ref(teamName);
        ref.on("value", function(snapshot) {
            copyArray(snapshot.val());
            console.log("call");
        });

        //Copy the path and calling the URL path function to take Google Cloud
        function copyArray(teamValue) {
            $scope.teamDetails = [];
            angular.forEach(teamValue, function(value, key) {
                getMyImage(value, function(url, teamObj) {
                    $timeout(function() {
                        $scope.teamDetails.push({
                            'src': url,
                            'playerName': teamObj.player_name,
                            'playerDOB': teamObj.player_dob,
                            'playerBattingStyle': teamObj.player_batting_style,
                            'playerBowlingStyle': teamObj.player_bowling_style,
                            'playerRole': teamObj.player_role
                        }); //closing of Push operation
                    }, 10);
                }); //Closing The getMyImage Method callback method
            }); //Closing The ForEAch Method
        } //copyArray Method End


        //Function to Get image url from google cloud
        function getMyImage(teamObj, callback) {

            var storageRef = firebase.storage().ref();
            storageRef.child(teamObj.player_img_url).getDownloadURL().then(function(url) {

                callback(url, teamObj);
            }).catch(function(error) {
                // Handle any errors
            });
        }
        //getMyImage Function End

        $scope.showAlert = function(ev, index, team) {

            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application
            // to prevent interaction outside of dialog

            var id = '#a' + index; //Fetch the unique ID from html form
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
        }; //showAlert method end
    });
//teamInfoCtrl Controller end
