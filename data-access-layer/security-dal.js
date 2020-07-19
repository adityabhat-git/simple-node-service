 // require mongojs for connection to mongodb
const mongojs = require("mongojs");

 // require jsonwebtoken for token based authentication
const jwt = require("jsonwebtoken");

//required to get the secret key against which we would be using jwt
const serviceToken = require("./service-token");

 //node-events-db is my db collection and users is my table.
const db = mongojs("node-events-db",["users"]);

class SecurityService{
    constructor(){

    }
    // to check if the user has passed valid credentials. If yes , then using JWT to create the token for the user data and use it across the application
    checkCredentials(email,password){
        return new Promise((resolve,reject)=>{
            db.users.findOne({email:email},(err,user)=>{
                if(err){
                    reject({success:false});
                    return;
                }
                else{
                    if(user==null){
                        reject({
                            success:false,
                            message:"Please check your email id"
                        });
                        return;
                    }

                    else{
                        if(user.password !== password){
                            reject({
                                success:false,
                                message:"Please check your password"
                            });
                            return;
                        }
                        else{
                            let token = jwt.sign(user,serviceToken.secretKey,{expiresIn:2000});
                            resolve({
                                success:true,
                                message:"You are now authenticated",
                                token:token,
                                role:user.role
                            });
                        }
                    }
                }
            });
        });
    }
}
//No we will export this module so that these methods are available wherever we require it
module.exports = new SecurityService();