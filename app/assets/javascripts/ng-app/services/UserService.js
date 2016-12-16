function UserService($http) {
  var vrm = this;

  vrm.findOrCreate = function() {
    return $http.get('/api/users.json')
  }


}


angular
  .module('app')
  .service('UserService', UserService)
