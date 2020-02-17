var express = require('express');
var passport = require('passport');
var router = express.Router();


router.get('/google/callback/', passport.authenticate('google', { 
        successRedirect: '/users/',
        failure: '/error/'
}));


router.get('/google', passport.authenticate('google', {
        scope: ['https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email']
}))

module.exports = router;

