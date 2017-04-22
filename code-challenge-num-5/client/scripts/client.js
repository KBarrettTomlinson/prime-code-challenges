//angular module
var myApp = angular.module('myApp', []);

//CONTROLLERS
// input contoller
myApp.controller('InputController', [ '$scope', 'DataService', function($scope,DataService){
  console.log("I've got an InputController, where would you like me to put it?");

  $scope.newMessage = {};
  $scope.postData = function(message){
    console.log("is this happening?");
    DataService.postData(message);
    $scope.newMessage = {name: '', message: ''};
  };//ends $scope.postData
}]);//ends InputController

// display controller
myApp.controller('DisplayController', [ '$scope', 'DataService', function($scope,DataService){
  console.log("I've got an DisplayController, where would you like me to put it?");

  $scope.messageObject = DataService.messageObject;
  $scope.getData = function(){
    DataService.getData();
  };//ends $scope.getData

  $scope.getData();
}]);//ends InputController

//FACTORIES
//factory DataService
myApp.factory('DataService', ['$http', function($http){
    var messageObject = {
      messages : []
    };

    function getData(){
      $http.get('/messages').then(function(response){
        console.log("response from getData", response);
        messageObject.messages = response.data;
        console.log("messageObject", messageObject);
      });
    }//ends getData

    function postData(message){
      $http.post('/messages', message).then(function(response){
        console.log("response from postData", response);
        getData();
      });
    }//ends postData

    return {
      messageObject : messageObject,
      getData  : getData,
      postData : postData
    };
}]);// ends factory DataService
