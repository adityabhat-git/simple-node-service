const express = require("express");
const jwt = require("jsonwebtoken");
const serviceToken = require("../data-access-layer/service-token");

function validateToken(request,response,next) {
    let token = request.body.token || request.query.token || request.headers["x-access-token"];
    if(token){
        jwt.verify(token,serviceToken.secretKey,(err,decide)=>{
            if(err){
                response.json({
                    success:false,
                    message:"Your token is expired !! Please re-login to generate a new token."
                });
            }
            next();
        });
    }
    else{
        response.json({
            success:false,
            message:"Sorry!! We did not find the token , Please re-login."
        });
    }
}

module.exports = validateToken;