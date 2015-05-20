'use strict';

/**
 * @ngdoc function
 * @name donationsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the donationsApp
 */
angular.module('donationsApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.alertVisible = false;
    $scope.alertMessage = '';

    $scope.submit = function() {
        if($scope.username) {
          var apiFollowers = 'https://api.twitch.tv/kraken/channels/' + $scope.username + '/follows?callback=JSON_CALLBACK';
          $scope.alertVisible = false;
          $http.jsonp(apiFollowers).success(function(data) {
              var followers = [];
              var Followers = data.follows;

              angular.forEach(Followers, function(value, key) {
                this.push(value.user.display_name);
              }, followers);

              $scope.followers = followers;
          }).error(function(err) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
              //TODO: use function(status) to alert status failure
              alert('oh poop this happened:' + err);
          });
        } else {
          $scope.alertMessage = 'Please enter your Twitch Username';
          $scope.alertVisible = true;
        }
    };
  });
