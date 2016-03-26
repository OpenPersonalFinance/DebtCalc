/******************************************************************************
File:   services.js
author: Matt Casanova
email:  lazersquad@gmail.com
******************************************************************************/
angular.module('starter.services', [])

/******************************************************************************
This factory service allows us to share data between controllers
which means we can share data between pages/tabs.  For now we only need one 
Controller.
******************************************************************************/
.factory('SharedData', function(){  
  var sharedData = {};
  return sharedData;
  
});