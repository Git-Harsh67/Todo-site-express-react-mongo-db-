const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {

    try {

        const bearerHeader = req.headers["authorization"];
        if (!bearerHeader) {
            return res.status(401).json({
                msg: "header missing"
            })
        }

        const bearerToken = bearerHeader.split(" ");

        if (bearerToken.length !== 2 || bearerToken[0] !== "Bearer") {
            return res.status(403).json({
                msg: "token is not valid or found"
            })
        }

        const token = bearerToken[1]

        if (!token) {
            return res.json({
                msg: "token is missing"
            })
        }

        const decode = jwt.verify(token, process.env.JWT_PASSWORD)
        // console.log(decode)
        if (decode) {
            req.user = decode
            // console.log(req.user)
            return next()

        }
    } catch (error) {
        return res.json({
            msg: "your token is not decoded",
            error
        })
    }


}

module.exports = verifyToken