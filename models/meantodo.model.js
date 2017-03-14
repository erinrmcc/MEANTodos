var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
  description: String,
  completed: Boolean
});
//create the mongoose model - capitalized because it's a special case
var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;



// var completeProject = new Todo({
//   description: 'Complete this MeanTodo project before time runs out!',
//   completed: false
// });
// completeProject.save(function(err, data){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
