// create our app module
var app = angular.module('app', [])

// create the PostsCtrl module
// dependency inject $scope
app.controller('PostsCtrl', function ($scope) {

    // the function runs when the "Add Post" button is clicked
    $scope.addPost = function () {
        // Only add a post if there is a body
        if ($scope.postBody) {
            // unshift a new post into $scope.posts
            $scope.posts.unshift({
                username: 'sokos6',
                body: $scope.postBody // use the text entered
            })
            // clear out the input field
            $scope.postBody = null
        }
    }

    // starting data
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
});