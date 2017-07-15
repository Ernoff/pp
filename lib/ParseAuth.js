var _ = require('underscore');
var AppConfig = require("../configs/config");
var Parse = require('parse').Parse
Parse.initialize(AppConfig.APP_ID, null);
Parse.serverURL = AppConfig.SERVER_URL;

module.exports = function(req, res, next){
    Parse.User.become(req.session.token ? req.session.token : "gibberish")
    .then(function(user) {
        // If null is passed to .become() it will assume current(), which we don't want
        next();
    }).catch((error)=>{
        next();
    });
};
