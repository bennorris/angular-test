function UserService($http) {
  var currentUser;
  var currentUserId;


  this.findOrCreate = function(facebookInfo) {
    $http.get('/api/users.json')
    .then(function(res) {
      var found = false;
      for (var i = 0; i < res.data.length; i ++) {
          if (res.data[i].facebook == facebookInfo.id ) {
             console.log("USER EXISTS");
             currentUser = facebookInfo.first_name;
             currentUserId = facebookInfo.id;
             found = true;
          }
        }
          if (found == false) {
            console.log("TRYING TO MAKE USER...")
            var vals = {name: facebookInfo.first_name, facebook: facebookInfo.id };
            $http.post('/api/users', vals)
            .then(function() {
              console.log('User created!');
          })
            .catch(function() {
               console.log("Sorry, seems there's a problem here.")
            })
          }

    })
  }

      this.getUserId = function() {
        return currentUser;
      }


}


angular
  .module('app')
  .service('UserService', UserService)
