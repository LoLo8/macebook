console.log('users model');
var mongoose = require('mongoose');

var Schema = new mongoose.Schema

var UserSchema = new mongoose.Schema({
	user_first_name: {type: String, required: true},
	user_last_name: {type: String, required: true},
	user_birthdate: {type: Date, required: true},
	user_email: {type: String, required: true},
	user_password_hash: {type: String, required: true},
	user_friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
	user_events: [{type: Schema.Types.ObjectId, ref: 'Event'}],
	user_personas: [{type: Schema.Types.ObjectId, ref: 'Persona'}]
})

var User = mongoose.model('User', UserSchema);