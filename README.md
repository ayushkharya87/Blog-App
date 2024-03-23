<!-- 1. require express, mongoose, create port
2. connect mongodb
3. create .env file, require dotenv, dotenv.config();
4. models:- User.js - define schema, Post.js, Comment.js - schems

5. routes:-
       auth.js- require express.Router, UserSchema, bcrypt, jsonwebtoken, create register route.
        index.js:- require auth, define auth middleware
      auth.js- create login route, compare and check email and password, define jwtToken
     auth.js- logout route, remove cookie
    auth.js- refresher route - if user refresh the page user do not logout

6.  routes:-
      users.js- require, express.Router(), User,Post,CommentSchema, bcrypt
          users.js- update routes, find byId and change password and add hash and salt.
       users.js- delete route- findbyId and delete - User, Post, Comment
        users.js- get user route- findbyId and donot show password

7. routes:-
     posts.js- create route, update route, delete route, get post details, get posts route, get user posts route
       index.js - require posts.js route
   comments.js- create, update, delete, get post comments - index.js require comments.route

8. routes:- 
      posts.js- create search route inside get posts route, 

9. verifyToken.js- create middleware to verify user , and require in index.js
          apply on all routes in users.js, posts.js, comments.js
        index.js - require cors

10. frontend-
   navbar.js:- setup login and signup and create Menu.jsx,
   create file url.js:- set url 
    pages/register.jsx:- connect page to backend for register user , and use navigate;
   Login.jsx:- connect page to backend , and verify user and , use navigate;

11.   create context folder:- 
        define UserContext.jsx , and use context in login, register, navbar, Menu.jsx,
        and add refresher cookies function in UserContext

12.  Home.jsx:- fetch posts and search options,  HomePosts.jsx- display all posts
     navbar.jsx:- apply search function,
      PostDetails.jsx:- fetching posts by user id and show buttons from owner

13. backend:- index.js- require multer, create function & , define route for upload image

14. CreatePost.jsx- create posts, connect to backend, handle image upload
     PostDetails.jsx:- delete post and all comments, 
     EditPost.jsx:- edit posts and connect to backend, create update function like images, categories,
     PostDetails.jsx:-  apply function for fetching comments, write a new comments
      Comment.jsx- write function Owner can delete comment, - Menu.jsx- define user profile info.
     create MyBlogs.jsx- fetching posts of user, profile.jsx- update user profile -->