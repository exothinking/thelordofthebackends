module.exports = [
  {
    verb: "get",
    path: "/user",
    method: (req, res) => {

      if(req.query.error) {
        return res.status(req.query.error)
          .send([`Opa, você pediu por um erro de status: ${req.query.error}?`]);
      }

      res.send(["Getting user."]);
    }
  },
  {
    verb: "get",
    path: "/user/:id",
    method: (req, res) => {

      if(req.query.error) {
        return res.status(req.query.error)
          .send([`Opa, você pediu por um erro de status: ${req.query.error}?`]);
      }

      res.send(["Getting one specific user with ID: " + req.params.id]);
    }
  },
  {
    verb: "post",
    path: "/user",
    method: (req, res) => {
      
      if(req.query.error) {
        return res.status(req.query.error)
          .send([`Opa, você pediu por um erro de status: ${req.query.error}?`]);
      }

      res.send(["Creating new user"]);
    }
  },
  {
    verb: "put",
    path: "/user/:id",
    method: (req, res) => {
      
      if(req.query.error) {
        return res.status(req.query.error)
          .send([`Opa, você pediu por um erro de status: ${req.query.error}?`]);
      }

      res.send(["Updating user with ID: " + req.params.id]);
    }
  },
  {
    verb: "delete",
    path: "/user/:id",
    method: (req, res) => {
      
      if(req.query.error) {
        return res.status(req.query.error)
          .send([`Opa, você pediu por um erro de status: ${req.query.error}?`]);
      }

      res.send(["Deleting user with ID: " + req.params.id]);
    }
  }
]