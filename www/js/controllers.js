angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('FurnitureItemsCtrl', function($scope, FurnitureItems) {
  $scope.furnitureItems = FurnitureItems.all();
  $scope.remove = function(furnitureItem) {
    FurnitureItems.remove(furnitureItem);
  }
})

.controller('FurnitureItemDetailCtrl', function($scope, $stateParams, FurnitureItems) {
  $scope.furnitureItem = FurnitureItems.get($stateParams.furnitureItemId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
