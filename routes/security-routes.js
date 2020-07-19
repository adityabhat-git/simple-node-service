const express = require("express");

const securityRoutes = express.Router();
const securityDalObject = require("../data-access-layer/security-dal");

securityRoutes.post("/",(request,response)=>{
    securityDalObject.checkCredentials(request.body.email,request.body.password).then(
        message => response.json(message),
        reason => response.json(reason)
    );
});

module.exports = securityRoutes;