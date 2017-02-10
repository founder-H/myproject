
/*Bootlint用于检查使用BootStrap中的错误*/
(function () {
    var s = document.createElement("script");
    s.onload = function () {
        bootlint.showLintReportForCurrentDocument([]);
    };
    s.src = "js/bootlint.js";
    document.body.appendChild(s)
})();

var app=angular.module('kaifanla',['ng','ngRoute']);

//创建一个parentCtrl
    app.controller('parentCtrl',['$scope','$location',function($scope,$location){
        $scope.jump=function(url){
            $location.path(url)
        }
    }]);

app.config(function($routeProvider){
    $routeProvider.when('/start',{
        templateUrl:'tpl/start.html'
    }).when('/main',{
        templateUrl:'tpl/main.html'
    }).when('/detail',{
        templateUrl:'tpl/detail.html'
    }).when('/order',{
        templateUrl:'tpl/order.html'
    }).when('/myOrder',{
        templateUrl:'tpl/myOrder.html'
    }).otherwise({redirectTo:'/start'});
});
