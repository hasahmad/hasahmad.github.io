app.factory('forecast', ['$http', function($http) {
	return $http.get('../../quran.json')
  	.success(function(data) {
  		return data;
  	})
  	.error(function(err){
  		return err;
  	});
}]);