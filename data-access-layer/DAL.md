This is the DAL Layer. Here we have created two js classes
* **Events Service**
    * This service has 3 different methods
        - **getAllEvents()** - this would fetch all the events which are configured there in the Mongo DB instance on your local.
        - **getEventDetails(eventId)** - this would fetch a single event object with the provided eventId.
        - **addNewEvent(event)** - this would a new document (record) to the events collection in the mongo db.
    
* **Employees Service**
    * This service has 3 different methods.
        - **getAllEmployees()** - this would fetch all the employees which are configured there in the Mongo DB instance on your local.
        - **getEmployeeDetails(employeeId)** - this would fetch a single employee object with the provided employeeId.
        - **addNewEmployee(employee)** - this would a new document (record) to the employees collection in the mongo db.
