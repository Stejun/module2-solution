(function(){
    "use strict";
    
    angular.module('ShoppingListCheckOff',[])
    
    .controller('ToBuyController',['$scope', 'ShoppingListCheckOffService',function($scope,serv){
        var buy = this;
        buy.list = serv.getBuyList();
        buy.buyItem = function(index){
            serv.buyItem(index);
        }
    }])
    
    .controller('AlreadyBoughtController',['$scope', 'ShoppingListCheckOffService',function($scope,serv){
        var bought = this;
        bought.list = serv.getBoughtList();
    }])
    
    .service("ShoppingListCheckOffService",function(){
        var checkList = this;
        var toBuy = [{name:"cookies",quantity: 10},
                    {name:"milk",quantity: 1},
                    {name:"fish",quantity: 6},
                    {name:"magic dust",quantity: 3},
                    {name:"unicorn",quantity: 12},
                    {name:"tank",quantity: 1},
                    {name:"alien ship",quantity: 2}];
        var bought = [];
        checkList.getBuyList = function(){
            return toBuy;
        },
        checkList.getBoughtList = function(){
            return bought;
        },
        checkList.buyItem = function(index){
            bought.push(toBuy[index]);
            toBuy.splice(index,1);
        };
    })
})()
