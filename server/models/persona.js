console.log('personas model');
var mongoose = require('mongoose');

var Schema = new mongoose.Schema;

var PersonaSchema = new mongoose.Schema({
	persona_name: {type: String, required: true},
	persona_occupation: {type: String, required: true},
	persona_friends: [{type: Schema.Types.ObjectId, ref: 'Persona'}],
	persona_user: {type: Schema.Types.ObjectId, ref: 'User'}
})

var Persona = mongoose.model('Persona', PersonaSchema);

// We can learn how to self-join the personas.