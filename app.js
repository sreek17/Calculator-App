var module = angular.module("myApp",[]);

module.controller("myCntrl",function($scope)
{
    $scope.add = function()
   {
     $scope.abc = "+";  
   }
     $scope.sub = function()
   {
     $scope.abc = "-";  
   }
      $scope.mul = function()
   {
     $scope.abc = "*";  
   }
       $scope.divide = function()
   {
     $scope.abc = "/";  
   }
       
       $scope.finalAns = function()
       {
           if($scope.abc == "+")
  {$scope.answer=parseInt($scope.input1)+parseInt($scope.input2) ;}
                if($scope.abc == "-")
  {$scope.answer=parseInt($scope.input1)-parseInt($scope.input2) ;}
                if($scope.abc == "*")
  {$scope.answer=parseInt($scope.input1)*parseInt($scope.input2) ;}
                if($scope.abc == "/")
  {$scope.answer=parseInt($scope.input1)/parseInt($scope.input2) ;}
           
       }
});