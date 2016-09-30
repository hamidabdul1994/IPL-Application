// File Name:teamCtrl.js
// Created By:Hamid Raza Noori
// date:23/09/2016
// Purpose:To Control the team data

angular.module("myApp")
    .controller("teamNameCtrl", function($scope, $firebase) {

        // SLIDES WITH CAPTIONS
        $scope.slides = [{
            'src': 'loading.gif',
            caption: ' '
        }];

        //Option Object for Setting the carousel-3d screen
        $scope.options = {
            sourceProp: 'src',
            visible: 5,
            perspective: 35,
            startSlide: 0,
            border: 1,
            // dir: 'ltr',
            width: 360,
            height: 370,
            //space: 300,
            clicking: true,
            //animationSpeed:1000,
            autoRotationSpeed: 30000,
            //inverseScaling:1000
            loop: true
                //controls:true
        };

        //Refference to take data from Firebase Database
        var ref = firebase.database().ref();
        ref.on("value", function(snapshot) {
            copyArray(snapshot.val().team_info);
        }, function(error) {
            console.log("Error: " + error.code); //
        });

        //Copy the path and calling the URL path function to take Google Cloud
        function copyArray(imageLoc) {
            $scope.slides = []; //Clearing $scope.slides variable
            for (i in imageLoc) {
                getMyImage(imageLoc[i].team_img_url, imageLoc[i].team_name, function(url, caption) {
                    $scope.slides.push({
                        'src': url,
                        'caption': caption,
                        'url': caption.replace(/\s+/g, '')
                    });
                });
            }
        }
        // copyArray method end


        //Function to Get image url from google cloud
        function getMyImage(path, caption, callback) {

            var storageRef = firebase.storage().ref();
            storageRef.child(path).getDownloadURL().then(function(url) {
                callback(url, caption);
            }).catch(function(error) {
                // Handle any errors
            });
        }
        //getMyImage Method End

        //Controller end
    });
