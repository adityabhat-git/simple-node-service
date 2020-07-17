const express = require("express"); //express object

const eventsRoutes = express.Router(); //router object of express
const eventsDalObject = require("../data-access-layer/event-dal"); // event dal from dal layer

//create default router 
eventsRoutes.get("/",(request,response)=>{
    console.log(`Get All Events Request - ${request}`);
    eventsDalObject.getAllEvents().then(
        events => response.json(events),
        reason => response.send(reason).status(404)
    );
});

//create router for getting event details using event id
eventsRoutes.get("/:id",(request,response)=>{
    console.log(`Get Event Details Request - ${request}`);
    let eventId = Number.parseInt(request.params.id);
    eventsDalObject.getEventDetails(eventId).then(
        event => response.json(event),
        reason => response.send(reason).status(404)
    );
});

//create router for posting an event using event object
eventsRoutes.post("/",(request,response)=>{
    console.log(`Post Event Detials Request - ${request}`);
    let eventDetails = request.body;

    eventsDalObject.addnewEvent(eventDetails).then(
        newEvent => {
            response.json(newEvent);
            console.log(`New Event Added - ${newEvent}`);
        },
        reason => response.send(reason)
    );
});


module.exports = eventsRoutes;

