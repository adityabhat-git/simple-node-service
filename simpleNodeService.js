const express = require("express"); //require express
const bodyParser = require("body-parser"); //require bodyparser
const cors = require("cors"); //require cors
const morgan = require("morgan"); //require morgan

const employeesRoutes = require("./routes/employees-routes"); // getting the employees routes from the routes
const eventsRoutes = require("./routes/events-routes"); //getting the events routes from the routes
const securityRoutes = require("./routes/security-routes"); //getting the security routes from the routes

const PORT = process.env.PORT || 9090; // port which you want to run the application to be given after '||' .

const app = express();
app.use(bodyParser.json()); //to parse the body as JSON
app.use(bodyParser.urlencoded({extended : false})); // parsing the body as form - encoded data 
app.use(cors()); // for sharing our resource over internet. 
app.use(morgan("dev")); // for logging in terminal 

app.use("/api/employees",employeesRoutes); // for routing to employees routes
app.use("/api/events",eventsRoutes); //for routing to events routes
app.use("/api/auth",securityRoutes);//for routing to security routes

app.listen(PORT,()=>console.log(`Simple Node JS service(API) is listening on PORT : ${PORT}`));