var app = angular.module("myMod", ["ngRoute"]);

app.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/add", {
        templateUrl: "views/add.html",
        controller: "add_ctrl",
      })
      .when("/list", {
        templateUrl: "views/list.html",
        controller: "list_ctrl",
      })
      .when("/edit", {
        templateUrl: "views/edit.html",
        controller: "list_ctrl",
      })
      .otherwise({
        redirectTo: "index.html",
      });
  },
]);

app.controller("list_ctrl", function ($scope, $http) {
  $scope.employee = [];

  $http({
    method: "GET",
    url: "http://127.0.0.1:8000/employee/",
  }).then(
    function (response) {
      $scope.employee = response.data;
    },
    function (error) {
      console.log(error, "can not get");
    }
  );

  $scope.DeleteData = function (id) {
    console.log("Id", id);
    $http({
      method: "DELETE",
      url: "http://127.0.0.1:8000/employee/" + id,
      data: {id: id},
    }).then(
      function (data, status) {
        location.reload();
        console.log("data deleted");
      },
      function (error) {
        console.log(error, " You can not delete");
      }
    );
  };
  // $scope.EditData = function (id) {
  //     console.log("Id",id)
  //     $http({
  //         method: 'PUT',
  //         url: 'http://127.0.0.1:8000/employee/'+ id,
  //         data: ({id : id})
  //     }).then(function (response) {
  //         // $scope.employee = response.data;
  //         // console.log("hgdsgadhghk",$scope.employee)
  //         console.log("data Edited")
  //     }, function (error) {
  //         console.log(error, " You can not update");
  //     });
  // };
});

app.controller("add_ctrl", function ($scope, $http) {
  // $scope.employee = [];
  $scope.AddData = function (first_name, last_name, email, title) {
    $http({
      method: "POST",
      url: "http://127.0.0.1:8000/employee/",
      data: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        title: title.name,
      },
    }).then(
      function (data, status) {
        console.log("data", data);
        console.log("data added");
      },
      function (error) {
        console.log(error, " You can not add");
      }
    );
  };
});

app.controller("edit_ctrl", function ($scope, $http) {
  $scope.UpdateData = function (id) {
      console.log("Id",id)
      $http({
          method: 'PUT',
          url: `http://127.0.0.1:8000/employee` + id,
          data: {
              id: id
          }
      
      }).then(function (data, status) {
          location.reload();
          console.log("data deleted")
      }, function (error) {
          console.log(error, " You can not update");
      });
  };
 
 
});

// app.controller("delete_ctrl", function ($scope) {
//     $scope.DeleteData = function (id) {
//         $http({
//             method: 'DELETE',
//             url: 'http://127.0.0.1:8000/employee/id/',
//             data:id
//         }).then(function (data, status) {

//             console.log("data",data);
//             console.log("data deleted")
//         }, function (error) {
//             console.log(error, " You can not delete");
//         });
//     };

//     });

//     app.controller("edit_ctrl", function ($scope) {

//     });

// var app = angular.module("myapp", ['ngRoute']);

// app.config(["$routeProvider", function ($routeProvider) {

//     $routeProvider.
//         when("/add", {
//             templateUrl: 'views/add.html',
//             controller:'add_ctrl'
//         }).
//         when("/list", {
//             templateUrl: 'views/list.html',
//             controller:'list_ctrl'
//         }).
//         when("/delete", {
//             templateUrl: 'views/delete.html',
//             controller:'delete_ctrl'
//         }).
//         when("/edit", {
//             templateUrl: 'views/edit.html',
//             controller: 'edit_ctrl'

//         }).otherwise({
//             redirectTo:'index.html'
//         })
// }])

// app.controller("add_ctrl", function ($scope) {
//         $scope.EmpList = [];
//         $scope.AddData = function () {

//                 $http({
//                         method : 'POST',
//                         url :  'http://127.0.0.1:8000/employee/',
//                         headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//                 }).success(function(data, status, headers, config) {
//                         console.log("Success", status);
//                 }).error(function(data, status, headers, config) {
//                         console.log("Error " + data);

//                 });

//         }

// });

// app.controller("list_ctrl", function ($scope) {

//         $scope.employee = [];
//                 $http({
//                         method: 'GET', url: 'http://127.0.0.1:8000/employee/',
//                         headers: { 'X-Parse-Application-Id': 'XXX', 'X-Parse-REST-API-Key': 'YYY' }
//                 })
//                 .success(function(data, status) {
//                         $scope.employee = data;
//                 })
//                         error(function(data, status) {
//                         alert("Error");
//                 });

// });

// app.controller("delete_ctrl", function ($scope) {

// });

// app.controller("edit_ctrl", function ($scope) {

// });
// app.controller("maincontroller", function ($scope) {

// });

// var app = angular.module("mainApp", [])

// app.controller("crudController", function ($scope, $http) {
// //     var myTestApp = angular.module("myTestModule", [])
// // myTestApp.controller("customerController", function ($scope, $http) {
//         var url = "http://localhost:8000/employee/";
//         // fetch(url, {mode: "no-cors"})
//         headers : {

//             "Content-type" : "application/json"
//             "Access-Control-Allow-Origin": "*"

//             }

//         $http.post(url).then( function(response) {
//            $scope.employees = response.data;
//         });

// });

// var app = angular.module("mainApp", [])

//     app.controller("crudController", function ($scope, $http) {
//         //     var myTestApp = angular.module("myTestModule", [])
//         // myTestApp.controller("customerController", function ($scope, $http) {
//                 var url = "http://localhost:8000/employee/";

//                 // headers : {

//                 //     "Content-type" : "application/json"
//                 //     "Access-Control-Allow-Origin": "*"

//                 //     }

//                 $http.post(url).then( function(response) {
//                    $scope.employees = response.data;
//                 });

//     });

//     $scope.EmpList = [];
//     $scope.AddData = function () {
//         var emp = {
//             Id: $scope.EmpList.length + 1,
//             First_Name: $scope.First_Name,
//             Last_Name: $scope.Last_Name,
//             Email: $scope.Email,
//             Role: $scope.Role

//         };

//         $scope.EmpList.push(emp);
//         ClearModel();
//     };

//     //Delete the data

//     $scope.DeleteData = function (emp) {
//         var index = $scope.EmpList.indexOf(emp);
//         $scope.EmpList.splice(index, 1);
//     };

//     //function to bind data to the input fields

//     $scope.BindSelectedData = function (emp) {

//         $scope.Id = emp.Id;
//         $scope.First_Name = emp.First_Name;
//         $scope.Last_Name = emp.Last_Name;
//         $scope.Email = emp.Email;
//         $scope.Role= emp.Role;
//     }

//     //Update data for
//     $scope.UpdateData    = function () {
//         $.grep($scope.EmpList, function (e) {
//             if(e.id == $scope.Id)
//             {

//                 e.first_Name = $scope.First_Name;
//                 //e.Last_Name = $scope.Last_Name;
//                 //e.Email = $scope.Email;
//                 //e.Role=$scope.Role;
//             }
//         });
//     }

//     function ClearModel() {
//         $scope.Id = 0;
//         $scope.First_Name = '';
//         $scope.Last_Name= '';
//         $scope.Email = '';

//     }

// });
