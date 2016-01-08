app.controller('MyCtrl', ['$scope', 'quran', function($scope, quran) {
  quran.success(function(data) {
  	$scope.quranText = data;
  	$scope.quranText.sura++;
  });
}]);