(function(){
  angular.module('MEANTodos') //getter syntax
    .controller('TodoController', TodoController);

    TodoController.$inject = ['$scope', 'TodoService'];

    function TodoController($scope, TodoService){
      $scope.todos = [];
      $scope.newTodo = {};
      $scope.addTodo = addTodo;
      $scope.deleteTodo = deleteTodo;
      $scope.update = update;
      $scope.edit = edit;
      getTodos();

      function addTodo(newTodo){
        console.log('Creating a new todo...');
        TodoService.create(newTodo)
                  .then(function(response){
                    getTodos();
                    $scope.newTodo = {}; //clears in the input field
                  });
      }

      function getTodos(){
        console.log($scope.todos);
        console.log('Getting the todos...');
        TodoService.getAll()
                    .then(function(response){
                      $scope.todos = response.data.todos;
                    });
      }

      function edit(todo){
        console.log('editing...');
        todo.edit = true;
      }

      function update(todo){
        console.log('updating');
        todo.edit = false;
        TodoService.update(todo)
                    .then(function(response){
                      getTodos();
                    });
      }

      function deleteTodo(todo){
        console.log('Deleting todo...');
        TodoService.delete(todo)
                  .then(function(response){
                    getTodos();
                  });
      }
    }
})()
