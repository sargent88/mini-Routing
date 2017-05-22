angular.module('myApp').controller('productCtrl', function($scope, productSrvc, $stateParams) {

    if ($stateParams.type === "shoes") {
        $scope.products = productSrvc.shoeData;
    } else if ($stateParams.type === "socks") {
        $scope.products = productSrvc.sockData;
    }
})