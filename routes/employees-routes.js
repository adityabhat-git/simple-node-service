const express = require("express"); //Express object

const employeesRoutes = express.Router(); //Router object of express
const employeesDalObj = require("../data-access-layer/employee-dal"); // employees obj from dal layer

//Create default Get router
employeesRoutes.get("/",(request,response)=>{
    console.log(`Get All Employees request - ${request}`);
    employeesDalObj.getAllEmployees().then(
        events => response.json(events),
        reason => response.send(reason).status(404)
    );
});

//create another router to get details based upon the id passed 
employeesRoutes.get("/:id",(request,response)=>{
    console.log(`Get Employee Details request - ${request}`);
    let employeeId = Number.parseInt(request.params.id);

    employeesDalObj.getEmployeeDetails(employeeId).then(
        employee => response.json(employee),
        reason => response.send(reason).status(404)
    );
});

//create another router to post the employee details 
employeesRoutes.post("/",(request,response)=>{
    console.log(`Post Employee Details Request - ${request}`);
    let employeeData = request.body;

    employeesDalObj.addNewEmployee(employeeData).then(
        newEmployee=> {
            response.json(newEmployee);
            console.log(newEmployee);
        },
        reason => response.send(reason)
    );
});


module.exports = employeesRoutes;