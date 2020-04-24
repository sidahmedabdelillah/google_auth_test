const passport = require('passport');
const Googlelog = require('passport-google-oauth20').Strategy;
const User = require('../Modules/user.js');

passport.use(new Googlelog({
        clientID: '1018791743513-8v1he4ank6jqf83dftoos0bqe9pf9put.apps.googleusercontent.com',
        clientSecret: '_y0xE1A08uA6vdNuquTpDfi_',
        callbackURL: '/auth/google/redirect'
    },
    function (accessToken, refreshToken, profile, cb) {
        const {
            _json
        } = profile;
        new User({
            username: _json.name,
            googleID: _json.sub,
            image: _json.picture
        }).save();

    }
));
/*
passport.use(
    new Googlelog({
        //options fot Goth
        callbackURL: '/auth/google/redirect',
        clientID: '1018791743513-8v1he4ank6jqf83dftoos0bqe9pf9put.apps.googleusercontent.com',
        clientSecret: '_y0xE1A08uA6vdNuquTpDfi_'
    }),
    (accesToken, refreshToken, profile, cd) => {
        //callback  
        console.log("bla bla");
    }
);*/