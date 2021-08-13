
var app = angular.module("mainApp", [])
 

app.controller("crudController", function ($scope) {

    $scope.EmpList = [];
    $scope.AddData = function () {
        var emp = {
            Id: $scope.EmpList.length + 1,
            First_Name: $scope.First_Name,
            Last_Name: $scope.Last_Name,
            Email: $scope.Email,
            Role: $scope.Role


        };

        $scope.EmpList.push(emp);
        ClearModel();
    };  

    //Delete the data 

    $scope.DeleteData = function (emp) {
        var index = $scope.EmpList.indexOf(emp);
        $scope.EmpList.splice(index, 1);
    };


    //function to bind data to the input fields

    $scope.BindSelectedData = function (emp) {


        $scope.Id = emp.Id;
        $scope.First_Name = emp.First_Name;
        $scope.Last_Name = emp.Last_Name;
        $scope.Email = emp.Email;
        $scope.Role= emp.Role;
    }


    //Update data for
    $scope.UpdateData    = function () {
        $.grep($scope.EmpList, function (e) {
            if(e.id == $scope.Id)
            {

                e.first_Name = $scope.First_Name;
                //e.Last_Name = $scope.Last_Name;
                //e.Email = $scope.Email;
                //e.Role=$scope.Role;
            }
        });
    }


    function ClearModel() {
        $scope.Id = 0;
        $scope.First_Name = '';
        $scope.Last_Name= '';
        $scope.Email = '';

    }

     
});