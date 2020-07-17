 // require mongojs for connection to mongodb
const mongojs = require("mongojs");

//node-events-db is my db collection and employees is my table.
const db = mongojs("node-events-db",["employees"]);

class EmployeeDAL{
    constructor(){

    }

    //This method would bring in all the employees from the employees table
    getAllEmployees(){
        return new Promise((resolve,reject) =>{
            db.employees.find((err,docs)=>{
                if(err){
                    reject(err);
                    return;
                }
                resolve(docs);
            });
        });
    }

    //This method would bring in the employee data of the provided Employee Id from the employee table.
    getEmployeeDetails(employeeId){
        let empId = Number.parseInt(employeeId);
        return new Promise((resolve,reject)=>{
            db.employees.findOne({employeeId : empId},(err,doc)=>{
                if(err){
                    reject(err);
                    return;
                }
                resolve(doc);
            });
        });
        
    }

    addNewEmployee(employee){
        let empObject = {
            ...employee,
            employeeId : Number.parseInt(employee.employeeId),
            zipcode: Number.parseInt(employee.zipcode),
            avatar:"images/noimage.png"
        };

        return new Promise((resolve,reject)=>{
            db.employees.insert(empObject,(err,doc)=>{
                if(err){
                    reject(err);
                    return;
                }
                else
                {
                    resolve(doc);
                    console.log(`New Employee Added :-  ${empObject}`);
                }
            });
        });
    }
}

//No we will export this module so that these methods are available wherever we require it
module.exports = new EmployeeDAL();