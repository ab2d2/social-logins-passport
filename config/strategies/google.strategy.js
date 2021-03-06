var dotenv = require('dotenv');
dotenv.config();

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function () {
    debugger;
    passport.use(new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: 'http://localhost:3000/auth/google/callback'
        },
        function (req, accessToken, refreshToken, profile, done) {
            var user = {};
        
            user.email = profile.emails[0].value;
            user.image = profile._json.picture;
            user.displayName = profile.displayName;
        
            user.google = {};
            user.google.id = profile.id;
            user.google.token = accessToken;
            
            done(null, user);
        }
    ));


};