/*File Name:teamCtrl.js
Created By:Hamid Raza Noori
date:23/09/2016
Purpose:To Control the team data
*/

angular.module("myApp")
    .controller("teamNameCtrl", function($scope, $firebase, teamCache,teamSevice,$http) {

	$http.get("http://localhost:3000/readEmployeeMonthlyAttendance?token=bdadfhsag");
        /* SLIDES WITH CAPTIONS
        slides object contain two properties which is use to display
        slide and caption on view page
        */
        $scope.slides = [{
            'src': 'loading.gif',
            caption: ' '
        }];

        /*Option Object for Setting the carousel-3d screen
        options object have several properties which helps to display carousel
        */
        $scope.options = teamSevice.options;

        var myTeamCache = teamCache.get("teamInfo");
        if (myTeamCache) {
          console.log("cached");
          $scope.slides=myTeamCache;
        } else {
          console.log("Not Cached");
          teamSevice.firebaseCall("team_info",function(database){
            $scope.slides=[];
            angular.forEach(database,function(value,key){
              teamSevice.getMyImage(value,"team_img_url", function(url, obj) {
                  $scope.slides.push({
                      'src': url,
                      'caption': obj.team_name,
                      'url': obj.team_name.replace(/\s+/g, '')
                  });
              });
            })
          });
        }
        $scope.$watch("slides",function(newSlides,oldSlides){
          teamCache.put("teamInfo",newSlides);
        });

        /*Controller end*/
    });
