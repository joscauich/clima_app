angular.module('starter.services', [])

.factory('Chats', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  
  var chats = {};
  var datos = {
    pronosticos:{},
    metric : "metric",
    dias:"5",
    ciudad:"Cancun",
    all: function() {
      $http.get ("http://api.openweathermap.org/data/2.5/forecast/daily?cnt="+datos.dias+"&q="+datos.ciudad+"&APPID=143ffc47ae963adf95c8e2a4ccf660e3&units="+datos.metric+"&lang=es").then(function(info){
        datos.pronosticos=info.data.list;
        console.log(datos.pronosticos);
      });

    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < datos.pronosticos.length; i++) {
        if (datos.pronosticos[i].$$hashKey == chatId) {
          return datos.pronosticos[i];
        }
      }
      return null;
    }
  };
  return datos;
})

.factory('pronosticos', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  
  var chats = {};
  var datos = {
    pronosticos:{},
    metric : "metric",
    all: function() {
      $http.get ("http://api.openweathermap.org/data/2.5/forecast/cnt=3?&id=3531673&APPID=143ffc47ae963adf95c8e2a4ccf660e3&units=%22+datos.metric+%22&lang=es").then(function(info){
        datos.pronosticos=info.data.list;
        console.log(datos.pronosticos);
      });

    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < datos.pronosticos.length; i++) {
        if (datos.pronosticos[i].$$hashKey == chatId) {
          return datos.pronosticos[i];
        }
      }
      return null;
    }
  };
  return datos;
})

.factory('dia', function($http) {
  
  var chats = {};
  var datos = {
    pronosticos:{},
    metric : "metric",
    ciudad:"Cancun",
    dias:"5",
    city:{},
    all: function() {
      $http.get ("http://api.openweathermap.org/data/2.5/forecast/daily?cnt="+datos.dias+"&q="+datos.ciudad+"&APPID=143ffc47ae963adf95c8e2a4ccf660e3&units="+datos.metric+"&lang=es").then(function(info){
        datos.pronosticos=info.data.list;
        datos.city=info.data.city;
        console.log(datos.pronosticos);
      });

    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < datos.pronosticos.length; i++) {
        if (datos.pronosticos[i].$$hashKey == chatId) {
          return datos.pronosticos[i];
        }
      }
      return null;
    }
  };
  return datos;
});
