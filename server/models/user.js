console.log('users model');
var mongoose = require('mongoose');

var Schema = new mongoose.Schema

var UserSchema = new mongoose.Schema({
	user_name: {type: String, required: true},
	events: [{type: Schema.Types.ObjectId, ref: 'Event'}],
	personas: [{type: Schema.Types.ObjectId, ref: 'Persona'}]
})

var User = mongoose.model('User', UserSchema);