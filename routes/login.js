const jwt = require("jsonwebtoken");

module.exports = [
  {
    verb: "post",
    path: "/login",
    method: (req, res) => {
      const { login, password } = req.body;
      
      if(login == "jose" && password == "12345") {
        const user = global.users[0];
        const token = jwt.sign({userId: user.id}, process.env.SECRET_JWT, {expiresIn: 300});
        return res.send({user, token });
      }

      if(login == "fernanda" && password == "123456") {
        const user = global.users[1];
        const token = jwt.sign({userId: user.id}, process.env.SECRET_JWT, {expiresIn: 300});
        return res.send({user, token });
      }

      if(login == "maira" && password == "1234567") {
        const user = global.users[2];
        const token = jwt.sign({userId: user.id}, process.env.SECRET_JWT, {expiresIn: 300});
        return res.send({user, token });
      }

      if(login == "juliano" && password == "12345678") {
        const user = global.users[3];
        const token = jwt.sign({userId: user.id}, process.env.SECRET_JWT, {expiresIn: 300});
        return res.send({user, token });
      }

      res.status(401).send({error: "Usuário não autenticado."});
    }
  }
]