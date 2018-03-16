var app = angular.module('myApp', []);



app.controller('finddoc', function($rootScope,$scope, $http) {

	function($scope, $rootScope) {
  
	console.log("enter++++++++++++++"+$rootScope.s);
	
		 console.log("++++++++++++++"+$rootScope.p);
}
      
		 var url="http://localhost:3392/finddoctor.action/?city=alwar&specialization=dermatologists";
		 console.log(url);
  $http.get(url)
  .then(function(response) {
      console.log(response.data);
	  $scope.data = response.data;
  });
});


   app.controller('myCtrl', function($scope, $http ,$filter ,$window ) {
      
	   			
				
			
      $scope.findDoctor = function(city , specialization) {
		  $scope.city = city;
		  $scope.specialization =specialization;
		 console.log("++++++++++++++"+$scope.city);
		 console.log("++++++++++++++"+$scope.specialization);
		 //$window.location.href = 'test.html';
		/* var url="http://localhost:3392/finddoctor.action/?city=alwar&specialization=dermatologists";
		 console.log(url);
		   $http.get(url).then(function(response) {
             //  $scope.content = response.data;
		         console.log("***********************"); 
				 console.log(response.data);
            }, function(response) {
               // $scope.content = "Something went wrong";
           });
		*/
		
      };	
				
				
				
				
				
      $scope.myFunc = function(userName ,email ,pass, mobile) {
		 console.log("enter++++++++++++++");
		 var url='http://localhost:3392/signup/?userName='+userName+'&email='+email+'&password='+pass+'&mobile='+mobile;
		 
		   $http.get(url).then(function(response) {
               $scope.content = response.data;
		
            }, function(response) {
                $scope.content = "Something went wrong";
           });
		
		
      };
	   $scope.babyDetailsRegister = function(name ,pname,email ,date, contact) {
		 console.log("enter++++++++++++++"+name);
		console.log("enter++++++++++++++"+pname);
		console.log("enter++++++++++++++"+email);
		console.log("enter++++++++++++++"+date);
		console.log("enter++++++++++++++"+contact);
		newDate = $filter('date')(date, "yyyy-MM-dd");
		console.log("enter++++++++++++++"+newDate);
		 var url = 'http://localhost:3392/datesubmit/?bName='+name+'&pMobile='+contact+'&bDate='+newDate+'&email='+email;
		 console.log(url);
		   $http.get(url).then(function(response) {
               $scope.content = response.data;
		
            }, function(response) {
                $scope.content = "Something went wrong";
           });
		
		
      };
	     $scope.myLogin = function(email ,pass) {
		 
		 var url='http://localhost:3392/login/?email='+email+'&password='+pass;
		 console.log(url);
		   $http.get(url).then(function(response) {
               $scope.content = response.data;
		
            }, function(response) {
                $scope.content = "Something went wrong";
           });
		
		
      };
	  
	  
	   $scope.dateInsert = function(bName ,pMobile,bDate) {
		 
		 var url='http://localhost:3392/login/?bName='+bName+'&pMobile='+pMobile+'&bDate='+bDate;
		 console.log(url);
		   $http.get(url).then(function(response) {
               $scope.content = response.data;
		
            }, function(response) {
                $scope.content = "Something went wrong";
           });
		
		
      };
      
    });
	

	
