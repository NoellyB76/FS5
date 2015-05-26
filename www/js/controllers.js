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


.controller('ImgAccordion', function($scope) {

  $scope.groups = [];
  $scope.groups[0] = {
    name: 'Frame Finish',
    items:  ["antique black walnut", "antique black", "antique dark rum"]
  };

$scope.groups[1] = {
  name: 'Main Fabric',
  items: ["belle sapphire", "canvas cork", "canyon bamboo"]
};

$scope.groups[2] = {
  name: "Kidney Fabric",
  items: ["belle sapphire", "canvas cork", "canyon bamboo"]
};


  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

})





.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
