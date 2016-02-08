var app = angular.module('TaskMeApp');

app.controller('TasksController', ['$scope', '$http', function ($scope, $http){

  $scope.newTask = [];

   $scope.masterTask = angular.copy($scope.newTask );
   $scope.tasks = {};

   $scope.allTasks = function(){
      $scope.tasks = [];
      $http.get('api/tasks').then(function(response){
       $scope.tasks = response.data.tasks;
       $scope.newTask = angular.copy( $scope.masterTask );
     });
    };


  $scope.createTask = function(){
    $http({
      url: 'api/tasks',
      method: 'post',
      data: {task: $scope.newTask}
    }).then(function(response){
      $scope.allTasks();
    });
  };

  $scope.removeTask = function(index){
    $http({
      url: 'api/tasks/' + index,
      method: 'delete'
    }).then(function(){
      $scope.allTasks();
    })
  };



}]);
