 // require mongojs for connection to mongodb
 const mongojs = require("mongojs");

 //node-events-db is my db collection and events is my table.
 const db = mongojs("node-events-db",["events"]);

class EventDAL{
    constructor(){

    }

    //This method would bring in all the events present in the mock data.
    getAllEvents(){
        return new Promise((resolve,reject)=>{
            db.events.find((err,docs)=>{
                if(err){
                    reject(err);
                    return;
                }
                resolve(docs);
            });
        });
    }

    //This method would bring in the event data of the provided event Id.
    getEventDetails(eventId){
        let evId = Number.parseInt(eventId);
        return new Promise((resolve,reject)=>{
            db.events.findOne({eventId : evId},(err,doc)=>{
                if(err){
                    reject(err);
                    return;
                }
                resolve(doc);
            });
        });
    }

    addnewEvent(event){
        let eventObj = {
            ...event,
            eventId: Number.parseInt(event.eventId),
            startDate: new Date(event.startDate).toISOString(),
            endDate: new Date(event.endDate).toISOString(),
            fees: Number.parseInt(event.fees),
            seatsFilled: Number.parseInt(event.seatsFilled),
            logo: "images/noimage.png"
        };

        return new Promise((resolve,reject)=>{
            db.events.insert(eventObj,(err,doc)=>{
                if(err){
                    reject(err);
                    return;
                }
                else{
                    resolve(doc);
                    console.log(`New Event Added :- ${eventObj}`);
                }
            });
        });
    }
}

//No we will export this module so that these methods are available wherever we require it

module.exports = new EventDAL();