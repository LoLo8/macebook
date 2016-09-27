console.log('users model');
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var bcrypt = require('bcrypt');
var salt_work_factor = 10;

var UserSchema = new mongoose.Schema({
	first_name: {type: String, required: true, minlength: 1},
	last_name: {type: String, required: true, minlength: 1},
	birthday: {type: Date, required: true},
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true, minlength: 8},
	password_con: {type: String, required: true, minlength: 8}
});

UserSchema.plugin(uniqueValidator);

UserSchema.pre('save', function(next) {

	var user = this;

	if (!user.isModified('password') && user.password === user.password_con) return next();

	bcrypt.genSalt(salt_work_factor, function(err, salt) {
		if (err) return next(err);

		bcrypt.hash(user.password, salt, function(err, hash) {
			if (err) return next(err);
			user.password = hash;
			user.password_con = hash;
			next();
		});
	});
});


UserSchema.methods.comparePassword = function(candidatePassword) {
    return bcrypt.compareSync(candidatePassword, this.password);
};

var User = mongoose.model('User', UserSchema);