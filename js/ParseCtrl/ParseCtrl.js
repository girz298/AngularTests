angular.module('app').controller('ParseCtrl', ['$scope','$http', function($scope,$http){
    $scope.checked = true;
    $scope.addChecked = true;


    var date = new Date();
    $scope.today = date;

    $http.get('phones.json').success(function (data, status, headers, config) {
          console.log(data);
           
          data.forEach(function (curr) {
               $scope.items.push({name:curr.name,info:curr.snippet,year:$scope.today.getFullYear()-curr.age,status:curr.status})
          });
    });

     $scope.items = [];

    $scope.name = "";
    console.log($scope.items);
    $scope.addData = function(){
        if($scope.items.every(function (curr) {return curr.name!=$scope.name;}) && $scope.name!==""){
            $scope.items.push({name:$scope.name,status:$scope.addChecked});
        }
    }

    $scope.removeData = function(){
        $scope.items.forEach(function (curr) {
            if(curr.name === $scope.name){
                curr.name = undefined;
                curr.status = undefined;
            }
        });
    }

    $scope.toPlus = function(bol){
        return bol?"+":"-";
    }
}]);