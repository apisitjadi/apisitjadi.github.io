angular.module('magrillma', [])
  .controller('magrillmaCtrl', function($scope, $interval, dateFilter) {

    var now = new Date();
    var format = 'HH:mm:ss';
    var incrementTime = 80; //120 min



    $interval(function() {
      $scope.timeNow = dateFilter(new Date(), format);
      $scope.timeUp = dateFilter(new Date().setMinutes(new Date().getMinutes() + incrementTime), format);
    }, 1000);


  });
