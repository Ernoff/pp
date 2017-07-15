var _ = require('underscore');
var AppConfig = require("../configs/config");
var Parse = require('parse/node');
// var Parse = require('parse').Parse
Parse.initialize(AppConfig.APP_ID, null);
Parse.serverURL = AppConfig.SERVER_URL;

module.exports = function (app) {
    
    app.get('/logout', function (req, res, next) {
		Parse.User.logOut()
		req.session = null;
		res.redirect('/');
	});
};