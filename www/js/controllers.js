angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.serviciopronosticos=Chats;
  $scope.serviciopronosticos.all();
  
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
  $scope.updatedata=function (){
    $scope.serviciopronosticos.all();
  };
})

.controller('pronosticosCtrl', function($scope, pronosticos) {
 

  $scope.serviciopronosticos=pronosticos;
  $scope.serviciopronosticos.all();
  
  $scope.updatedata=function (){
    $scope.serviciopronosticos.all();
  };
})

.controller('pronosticosDia', function($scope, dia) {
 
  $scope.serviciopronosticos=dia;
  $scope.serviciopronosticos.all();
  
  $scope.updatedata=function (){
    $scope.serviciopronosticos.all();
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.pron = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
