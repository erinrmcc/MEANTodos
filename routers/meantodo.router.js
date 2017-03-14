var express = require('express');
var todoRouter = express.Router();
var meanTodo = require('../models/meantodo.model');

todoRouter.get('/todos', function(req, res){
  meanTodo.find({}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err  //do not actually send full error back in production, not secure
      });
    } else {
      res.status(200).json({
        todos: documents
      });
    }
  });
});

todoRouter.get('/todos/:id', function(req, res){
  meanTodo.find({_id: req.params.id}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
        });
    } else {
      res.status(200).json({
        todos: documents
      });
    }
  });
});

todoRouter.post('/todos', function (req, res){
  var todo = new meanTodo(req.body);
  todo.save(function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else [
      res.status(201).json({
        msg: 'Success'
      })
    ]
  });
});

todoRouter.put('/todos/:id', function (req, res){
  meanTodo.findOneAndUpdate({_id: req.params.id}, req.body, function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Succsesfully updated'
      });
    }
  });
})

todoRouter.delete('/todos/:id', function(req, res){
  meanTodo.remove({_id: req.params.id}, function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully delete'
      });
    }
  });
});

module.exports = todoRouter;
