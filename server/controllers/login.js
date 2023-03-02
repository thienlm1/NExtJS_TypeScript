const jwt = require('jsonwebtoken')

const login = (req, res) => {
    const data = req.body
    const Token = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '60s',
    });

    res.cookie('accessToken', { Token }, { expires: new Date(Date.now() + 60000) });
    res.json({
        username: data.username,
        accessToken: Token,
        expiredAt: new Date(Date.now() + 60000)
    })
}

module.exports = {
    login
};