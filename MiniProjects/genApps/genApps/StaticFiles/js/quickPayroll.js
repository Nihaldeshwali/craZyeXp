
/*------------------------------------------------------------
sample.js
Author: Dipankar dutta
This is a auto-generated Js file, implements the following feature:
- create a app and controller to access the data
- acces the API usinh $http angular js Services

------------------------------------------------------------*/
/**** Create ****/ 

var myApp = angular.module("myApp", []);

/******* helper function *******/
myApp.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});
/******* end of helper function *******/






  
/************ start of PayRoll Controller*****************/
myApp.controller("PayRollController",  function ($scope,$http,$sce) { 

    $scope.renderHtml = function (htmlCode) {
            return $sce.trustAsHtml(htmlCode);
    };
/************ Initialize all Data Variable. *****************/
$scope.item ={}
$scope.item_list ={}
$scope.ref_list_items =[]
$scope.limit=10;

$scope.quick_search={'in':'','out':''}


/*********************  get MiniView *****************/
$scope.getMiniView=function(a) {
  $http.get("/api/payroll/?page="+a+"&limit="+$scope.limit+"")
      .success(function(data, status, headers, config) {
        console.log(data)
        $scope.item_list = data.res;
        // DONT DO THIS BAD USER EXP$scope.status = data.status; $scope.msg=data.msg
        $scope.orderByField = 'id';
        $scope.reverseSort = false;
       // Not incduing this feature tableResize('#table_miniview_PayRoll');
      })
      .error(function(data, status, headers, config) { console.log('Error happen with status:'+status) });  
}
$scope.getMiniView(1);
/************ getting full data for an Item *****************/
$scope.getItem = function(a) {
     $http.get("/api/payroll/"+a+"/")
    .success(function(data, status, headers, config) {
      console.log(data)
      $scope.item = data.res;
      $scope.status = data.status; $scope.msg=data.msg
    })
    .error(function(data, status, headers, config) {console.log('Error happen with status:'+status)}); 
  }

/************ creating a new Item  *****************/
$scope.createItem = function(a) {
    console.log($('form#payroll').serialize())
    $http({
          method: "post",
          url: '/api/payroll/',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
          data:$('form#payroll').serialize()
    })
    .success(function(data, status, headers, config) {
     $scope.status = data.status; $scope.msg=data.msg
     console.log(data)
     $scope.getMiniView(1);
    })
    .error(function(data, status, headers, config) {

    }); 
}

/************ Updating an Item data  *****************/
$scope.updateItem = function(a) {
    if($scope.item.id == null)
    {
     $scope.status = 'error'; $scope.msg=' Please select a raw in left panel to update';
     return;
    }
    $http({
          method: "post",
          url: '/api/payroll/'+$scope.item.id+'/',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
          data:$('form#payroll').serialize()
    })
    .success(function(data, status, headers, config) {
     $scope.status = data.status; $scope.msg=data.msg
     console.log(data);
     $scope.getMiniView(1);
    })
    .error(function(data, status, headers, config) {
    }); 
}

/************ delete an Item data  *****************/
$scope.deleteItem = function(a){
  $http.delete("/api/payroll/"+a+"/")
      .success(function(data, status, headers, config) {
        $scope.item_list = data;
        $scope.status = data.status; $scope.msg=data.msg
        console.log(data);
        $scope.getMiniView(1);
      })
      .error(function(data, status, headers, config) {
        console.log('Error happen with status:'+status)
      });  
}

/*************** reset an item<used in form>***********************/
$scope.resetItem = function() {
  $scope.getItem($scope.item.id)
}


/************ Selectors: Retune a list of name for own model*****************/
$scope.selectItem = function(a) {
    $http({
          method: "post",
          url: '/api/payroll/aq/?limit=50',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
          data:{'include':'name'}
    })
    .success(function(data, status, headers, config) {
    $scope.payroll_lookup = data.res.data;
    })
    .error(function(data, status, headers, config) {
    }); 
}


$scope.qsPayRoll= function(a) {
     $http.get("/api/payroll/qs/?q="+$scope.quick_search.in)
    .success(function(data, status, headers, config) {
      console.log(data);
      $scope.quick_search.out= data.res;
      $scope.status = data.status; $scope.msg=data.msg
      //addClass('#m2m-payroll','show');
    })
    .error(function(data, status, headers, config) { console.log('Error happen with status:'+status)}); 
  }


  // Populate the variable as necessary,,
  //TODO Thsi wuld not work as the caller HTML is not ahve controller
  $scope.onLoadPayRoll =function(){
    console.log('You have clicked PayRoll')
    $scope.getMiniView(1);
  }
});
/************ End of PayRoll Controller*****************/



/*** End of JS file ***/

