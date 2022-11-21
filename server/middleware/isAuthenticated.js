require('dotenv').config()
const jwt = require('jsonwebtoken')
const {SECRET} = process.env

module.exports = {
    isAuthenticated: (req, res, next) => {

        

        
    //grabbing auth token from headers that is sent with each request from server
        const headerToken = req.get('Authorization')


    //checking for token and if it is not there, headerToken is falsy, than sending a 401 not authorized error
        if (!headerToken) {
            console.log('ERROR IN auth middleware')
            res.sendStatus(401)
        }
    //variable created to hold token
        let token

        try {
        
    // verifying user's token with JSON web token library and SECRET and catching errors
            token = jwt.verify(headerToken, SECRET)
        } catch (err) {
            err.statusCode = 500
            throw err
        }    

    //if token is falsy throwing an error
        if (!token) {
            const error = new Error('Not authenticated.')
            error.statusCode = 401
            throw error
        }

    //moves on to the next lines of code 
        next()
    }
}