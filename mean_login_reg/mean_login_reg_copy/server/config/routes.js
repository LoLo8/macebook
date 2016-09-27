console.log('routes');
var users = require('../controllers/users.js');
// What is this 'friends' object we are referencing below??
module.exports = function(app){
  app.post('/register', users.create);
  app.post('/login', users.login);
}