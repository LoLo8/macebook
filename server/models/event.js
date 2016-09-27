console.log('events model');
var mongoose = require('mongoose');

var Schema = new mongoose.Schema

var EventSchema = new mongoose.Schema({
	event_name: {type: String, required: true},
	event_start: {type: Date, required: true},
	event_end: {type: Date, required: true},
	event_location: {type: String, required: true},
	event_type: {type: String, required: true},
	event_description: {type: String, required: true},
	_user: {type: Schema.Types.ObjectId, ref: 'User'}
})

var Persona = mongoose.model('Persona', PersonaSchema);