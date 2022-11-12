All features below mentioned are completed :

Node, Mongo, and Express (No need for UI, you can run the APIs on postman). Use bcrypt for password security.

1. Create a user which takes 3 parameters full name, email and password. Enforce a strong password rule and add validation for email and full name.
API Endpoint:

POST: /user/create – User creation with a meaningful message if the user email or password is invalid

2. Update the user details (full name and password only). Email should not get updated at any point. A proper error message should be thrown if the user is not present in the database.
API Endpoint:

PUT: /user/edit – Add validations for full name and password

3. Delete the user by taking the user's email as input
API Endpoint:

DELETE: /user/delete

4. Get all the users' email addresses and passwords stored in the database
API Endpoint:

GET: /user/getAll

NUID 002704579