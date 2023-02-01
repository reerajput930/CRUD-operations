Seting up the MERN stack setup and performing CRUD operation

-------------------------------------
Client   - install the app ( npm instal create-react-app) nd packages
                           (create-react-app my-app)

Server   - npm init and install the packages
         - packages  - (express , nodemon ,core ,mongoose and dotenv)
         - creating the expressjs local server 
         - nd then connect to the database with the mongoose.connect() method



---------------------------------------
Server      - side create  all routes (e.g POST,GET ,PUT etc)
Client      - with the help of fetch, connect to backend

To run the mern stack your server and client both should be running

---------------------------------------------
Route Method used in server side:

.get('/users')         - get all the data
.post('/users')        - add user info
-get('/users/:id')     - get the document of given id
-delete('/users/:id')  - del the document of given id
-put('/users/:id')     - update the document of given id

Switch url in client side:

path = "/"                   - add user page (create.js , POST)                
path = "/allusers"           - all user info (RecordList.js, GET, DELETE)     
path = "/allusers/edit/:id"  - edit the particular id user info (Edit.js , GET, PUT)

-------------------------------------------------
important folder in server side:
controller - function
router     - all routes
model      - schema


