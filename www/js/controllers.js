angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})


.controller('teclas', function($scope, $cordovaVibration, $cordovaFlashlight, $cordovaNativeAudio, $timeout) {

  $scope.Vaca = function(){  
    try{
      //Vibración
      $cordovaVibration.vibrate(100);  

      //Sonido
      $cordovaNativeAudio
       .preloadSimple('click', 'audios/vaca.mp3')
      $cordovaNativeAudio.play('click');

      /*
      $cordovaNativeAudio
          .preloadSimple('click', 'audios/vaca.mp3')
          .then(function (msg) {
            console.log(msg);
          }, function (error) {
            alert(error);
          });

      $cordovaNativeAudio
          .preloadComplex('music', 'audios/grillo.mp3', 1, 1)
          .then(function (msg) {
            console.log(msg);
          }, function (error) {
            console.error(error);
          });

      $scope.play = function () {
          $cordovaNativeAudio.play('click', 'audios/vaca.mp3');
          $cordovaNativeAudio.loop('music');

          // stop 'music' loop and unload
          $timeout(function () {
            $cordovaNativeAudio.stop('music');

            $cordovaNativeAudio.unload('click');
            $cordovaNativeAudio.unload('music');
          }, 1000 * 60);
      //};*/

    } catch (e) {
        console.log("Esta ejecutando la aplicacion desde la PC",e);
        //throw e; // rethrow to not marked as handled
    }   
  };  

$scope.Grillo = function(){  
    try{
      //Vibración
      $cordovaVibration.vibrate(100);  

      //Sonido
      $cordovaNativeAudio
       .preloadSimple('click1', 'audios/grillo.mp3')
      $cordovaNativeAudio.play('click1');    
    } catch (e) {
        console.log("Esta ejecutando la aplicacion desde la PC",e);
        //throw e; // rethrow to not marked as handled
    }   
  };  

  $scope.Oveja = function(){  
    try{
      //Vibración
      $cordovaVibration.vibrate(100);  

      //Sonido
      $cordovaNativeAudio
       .preloadSimple('click2', 'audios/oveja.mp3')
      $cordovaNativeAudio.play('click2');    
    } catch (e) {
        console.log("Esta ejecutando la aplicacion desde la PC",e);
        //throw e; // rethrow to not marked as handled
    }   
  };  

  $scope.Cardenal = function(){  
    try{
      //Vibración
      $cordovaVibration.vibrate(100);  

      //Sonido
      $cordovaNativeAudio
       .preloadSimple('click3', 'audios/cardenal.mp3')
      $cordovaNativeAudio.play('click3');    
    } catch (e) {
        console.log("Esta ejecutando la aplicacion desde la PC",e);
        //throw e; // rethrow to not marked as handled
    }   
  };  


  $scope.Linterna = function(){  
    try{
        $cordovaFlashlight.available().then(function(availability) {
        var avail = availability; // is available
      }, function () {
        // unavailable
      });

      $cordovaFlashlight.switchOn()
        .then(
          function (success) { /* success */ },
          function (error) { /* error */ });

      $cordovaFlashlight.switchOff()
        .then(
          function (success) { /* success */ },
          function (error) { /* error */ });

      $cordovaFlashlight.toggle()
        .then(function (success) { /* success */ },
          function (error) { /* error */ });
      
    } catch(e){
      console.log("Está ejecutando la aplicacion desde la PC",e);
      //throw e; // rethrow to not marked as handled  
    }

  } //Fin funcion Linterna

}) //Fin controller "teclas" 




.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
