'use strict';

app.controller('BlogListController',function($scope){
        console.log("hello");
        $scope.title = 'there'
        $scope.someClickTest = function(){
            $scope.title = 'click'
        }
    });

//component('blogList');