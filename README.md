# Description

Gubbinal lets you discover a director's top three films and a musician's top three records, and then add them to a list to keep track of things you want to check out later.

# A Note on Using Locally

* You'll need to have API Keys for Facebook, Last.fm, and The Movie DB. Instructions for adding them to a config.js file are under the Install Instructions below.
* You can sign up for an account at The Movie DB here:  https://www.themoviedb.org/account/signup. After you've created and confirmed your account, you can log in and select 'API' from the left column and then 'Request an API Key'.
* You can create an account at Last.fm here: http://www.last.fm/api/account/create
* And finally, Facebook: https://developers.facebook.com/


# Install Instructions

* Clone this repo down to your local machine
* Run `bundle install`
* Run `cd app/assets/javascripts/ng-app` and then create a config.js file with `touch config.js`
* Open the config.js file and add the following, inserting your own API credentials within each of the ''.

```
var config = {
  LASTFM_KEY : '',
  MOVIE_KEY: '',
  FACEBOOK_KEY: ''
}
```
Save and cd back to the root directory.
* Fire up a local server with `rails s`

## Contributing
Bug reports and pull requests are always welcome.
