function UserService($http, $location) {



  this.findOrCreate = function(facebookInfo) {
    $http.get('/api/users.json')
    .then(function(res) {
      var found = false;
      for (var i = 0; i < res.data.length; i ++) {
          if (res.data[i].facebook == facebookInfo.id ) {
             console.log("USER EXISTS");
             localStorage.setItem('name', facebookInfo.first_name);
             localStorage.setItem('facebook', facebookInfo.id);
             found = true;
             $location.path(`/users/${facebookInfo.id}`);
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

      this.getUserNum = function() {
        return currentUserId;
      }



}


angular
  .module('app')
  .service('UserService', UserService)
