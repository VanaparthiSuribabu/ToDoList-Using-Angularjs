var app = angular.module("app", [])
app.controller('todoCtrl', function ($scope) {
    myTodoCount = 0;
    // $scope.todoList = [{ todoText: 'HTML', done: false }, { todoText: 'CSS', done: false },
    // { todoText: 'JAVASCRIPT', done: false }, { todoText: 'ANGULAR', done: false }];
    $scope.oldList = [];
    $scope.todoName = "";
    $scope.AllArray = [];
    $scope.todoList=[];
    $scope.add = true
    $scope.adds = false
    // $scope.AllArray = $scope.todoList;
    $scope.final = function($event) {
    
        if($event.target.checked){
        $scope.todoList = $scope.Active(); 
      
        }else{
        $scope.todoList = $scope.Completed(); 
       
        }
       
        document.getElementById("count").innerHTML = myTodoCount + "" + "Items Left";
    }
           
    $scope.All = function () {
    
        $scope.add = true;
        $scope.adds = false;  
        $scope.todoList = [];
        $scope.AllArray.filter((value) => { if (value) { $scope.todoList.push(value) } });
        myTodoCount =  $scope.todoList.length;
        document.getElementById("count").innerHTML = myTodoCount + "" + "Items Left";
    };
    $scope.Active = function () {
        $scope.add = true;
        $scope.adds = false;
        $scope.todoList = [];
        $scope.AllArray.filter((value) => { if (!value.done) { $scope.todoList.push(value) } });
        myTodoCount = $scope.todoList.length;
        document.getElementById("count").innerHTML = myTodoCount + "" + "Items Left";
        return $scope.todoList
     
    
    }
    $scope.Completed = function () {
      $scope.add = false;
      $scope.adds = true;
        myTodoCount =$scope.AllArray.length-$scope.todoList.length;
        $scope.todoList = [];
        $scope.AllArray.filter((value) => { if (value.done) { $scope.todoList.push(value) } });
        myTodoCount = $scope.todoList.length;
        document.getElementById("count").innerHTML = myTodoCount + "" + "Items Left";
        return $scope.todoList

    };
    $scope.ClearCompleated = function () {
        $scope.AllArray = $scope.AllArray.filter((value) => { if (value.done == false) { return value; } });
        console.log($scope.AllArray);
        $scope.todoList = [];
        myTodoCount = $scope.todoList.length;
        document.getElementById("count").innerHTML = myTodoCount + "" + "Items Left";
        
    }
        
    
});
app.directive('viewPlace', function () {
    return {
        restrict: 'E',
        templateUrl: 'old-view.html',
        link: function () {
        },
        scope: true
}
});
app.directive('formInput', function () {
    return {
        restrict: 'E',
        templateUrl: 'old-form.html',
        controller: function($scope) {
            $scope.todoAdd = function () {
                $scope.list.push({ todoText: $scope.todoName, done: false });
                console.log("list++")
                console.log($scope.list)
               $scope.array.push({ todoText: $scope.todoName, done: false });
            //    console.log("list===")
            //    console.log($scope.list)
                $scope.todoName = "";
               myTodoCount++;
               document.getElementById("count").innerHTML = myTodoCount + "" + "Items Left";
            };
        },
        link: function () {
        },
        scope: {
            list: "=",
            array: "="
        },
    }
});
