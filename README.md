Steps and notes to make this website:
1. mkdir server
2. cd server
3. npm init
4. npm i express jsonwebtoken mongoose dotenv argon2 cors
(dotenv -> environment variable, argon2 -> hash user's password, cors -> front-end to with back-end)
5. npm i --save-dev nodemon
6. change file package.json, field "scripts" add: "server":"nodemon index", after that when we type "npm server", file index.js will automatically run after any changed.
* Install extension REST client to call api instead of using POSTMAN
7. create file index.js and connect to PORT 5000
8. set up mongodb 
 - Go to mongodb website
 - Create new Prj
 - Create new Cluster
 - Copy url to connect this Cluster
9. (pwd: server) mkdir models and create models
10. (pwd: server) mkdir routes and create routes
11. (pwd: server) mkdir middleware and create middleware

12. npx create-react-app client
