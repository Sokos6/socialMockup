var app = angular.module('app', [])
app.controller('PostsCtrl', function ($scope) {
    $scope.posts = [
        {
            username: 'sokos6',
            body: 'Node rules!'
        },
        {
            username: 'laceejeans',
            body: 'we love angular.js...'
        }
    ]

    $scope.addPost = function() {
        $scope.posts.unshift({
            username: 'sokos6',
            body: 'my new post!'
        })
    }
})