const jwt = require('jsonwebtoken')

function auth(req, res) {
    try {
        const token = req.body.token
        console.log(token)
        if (!token) {
            res.json({
                access: false
            })
        }
        try {
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
            console.log("success")
            res.json({
                access: true
            })
        } catch (e) {
            res.json({
                access: false
            })
        }
    } catch (e) {
        res.json({
            access: false
        })
    }
}

module.exports = {
    auth
};