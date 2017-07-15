var _ = require('underscore');

module.exports = function (app) {
	
	app.get('/app', function (req, res, next) {
		return res.send("ok");
		res.render('static/index', {
			title: res.locals.AppName + " | You are Welcome",
			page: 'home'
        });
        
	});
	
};