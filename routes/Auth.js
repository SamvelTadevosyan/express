const jwt = require('jsonwebtoken');
const models = require('../models');

const Auth = (req, res) => {
  models.Users.findOne({
    where: { login: req.body.login },
  }).then(user => {
    if (user) {
      res.send({
        code: 200,
        message: "OK",
        data: user.dataValues,
        token: jwt.sign(user.dataValues, "secretKey"),
      })
    } else {
      res.send({
        code: 404,
        message: "NOT FOUND",
        data: {},
      })
    }
  })

};

export default Auth;
