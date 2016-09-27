console.log('users controller');

var mongoose = require('mongoose');
var User = mongoose.model('User');

function UsersController() {
	
	this.create = function(req, res) {

		var user = new User({first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday, email: req.body.email, password: req.body.password, password_con: req.body.password_con});

		console.log(user);

		user.save(function(err){
			if (err) {
				console.log("registration went wrong");
				console.log(err);
				res.json(err);
			} else {
				console.log("successful");
				res.json(user);
			}
		})
	};

	this.login = function(req, res) {

		User.findOne({email: req.body.email}, function(err, user) {
			if (err) {res.json(err);}

			else if (user && user.comparePassword(req.body.password)) {
				res.json(user);
			}

			else {
				res.json({
                        errors: {
                            login_reg: {
                                message: "Email and/or password is invalid",
                                kind: "what didn't work",
                                path: "reference to the schema's name",
                                value: "cause of the initial error"
                            }
                        },
                        name: "Validation error"
                    })
			}
		});	
	};
}
 module.exports = new UsersController();