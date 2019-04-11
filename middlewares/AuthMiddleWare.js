const jwt = require("jsonwebtoken");

const AuthMiddleWare = (req, res, next) => {
  if (req.path !== '/auth') {
    jwt.verify(req.headers.authorization, "secretKey", (err, success) => {
      if (err) {
        res.send({
          code: 401,
          message: "unauthorized",
          data: {},
        });
      }
    })
  }

  next();
};

export default AuthMiddleWare;