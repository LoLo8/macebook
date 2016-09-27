console.log('personas model');
var mongoose = require('mongoose');

var Schema = new mongoose.Schema;

var PersonaSchema = new mongoose.Schema({
	alias: {type: String, required: true},
	friends: [{type: Schema.Types.ObjectId, ref: 'Friend'}],
	_user: {type: Schema.Types.ObjectId, ref: 'User'}
})

var Persona = mongoose.model('Persona', PersonaSchema);

// We can learn how to self-join the personas.