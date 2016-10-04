/*File Name:teamService.js
Created By:Hamid Raza Noori
date:25/09/2016
Purpose:To Control the Team Infomation data
*/
angular.module("myApp")
.factory("teamSevice",function(){
  var service = {};
  service.options = {
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

  /*Refference to take data from Firebase Database*/
  service.firebaseCall = function(name,callback){
    var ref = firebase.database().ref(name);
    ref.on("value", function(snapshot) {
        callback(snapshot.val());
    }, function(error) {
        console.log("Error: " + error.code);
    });
  }


  /*************function getMyImage takes three parameter****************
  path=name of image, caption, callback for return the values to previous caller
  Get image url from google cloud give back to previous caller method
  */
  service.getMyImage=function(obj,urlName, callback) {

      var storageRef = firebase.storage().ref();
      storageRef.child(obj[urlName]).getDownloadURL().then(function(url) {
          callback(url, obj);
      }).catch(function(error) {
          // Handle any errors
      });
  }
  /*getMyImage Method End*/
  return service;
});
