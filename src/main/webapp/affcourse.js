class LectCourses {

	constructor (http) {
		this.$http = http;
	}
  
	lecture () {
		return this.$http({method: 'GET', url: 'http://localhost:8080/courses/rest/courses'});
    }
	  
	lectureAchats (idC) {
		return this.$http({method: 'GET', url: 'http://localhost:8080/courses/rest/achats/' + idC});
    }
	 
	retour () {
		return this.$http({method: 'GET', url: 'http://localhost:8080/courses'});
    }
}
LectCourses.$inject = ['$http'];

angular
  .module('affcourses', [])
  
  .controller('affcoursesCtrl', ['$scope', '$http', 'LectCourses', function ($scope, $http, LectCourses) {
      $scope.courses = [];
      $scope.detail = [];
      $scope.achats = [];
      $scope.datejma = [];

      LectCourses.lecture().then(successCCallback, errorCallback);

      function successCCallback(response) {
    	  $scope.courses = response.data;
 		  for (let i = 0; i < $scope.courses.length ; i++) {
 			  $scope.datejma[i]=$scope.courses[i].dateAchat.charAt(8) + $scope.courses[i].dateAchat.charAt(9) + "/" +
 			  					$scope.courses[i].dateAchat.charAt(5) + $scope.courses[i].dateAchat.charAt(6) + "/" +
 			  					$scope.courses[i].dateAchat.charAt(0) + $scope.courses[i].dateAchat.charAt(1) + $scope.courses[i].dateAchat.charAt(2) + $scope.courses[i].dateAchat.charAt(3);
 	          LectCourses.lectureAchats($scope.courses[i].idC)
 	      		.then(function(response) {
 	      			$scope.achats[i] = response.data;
  	      		}, errorCallback);
 	          $scope.detail[i]=false;
 		  };
      }
      
      function errorCallback(response) {
    	  console.error ("Erreur : ", arguments);
      }
 
      $scope.majdetail = function (i) {
    	  $scope.detail[i] = !$scope.detail[i];
      }   	  

      $scope.retour = function () {
          retour();
      }   	  

  }])
  
  .service('LectCourses', LectCourses);
