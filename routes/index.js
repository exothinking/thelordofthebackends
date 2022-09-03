const router = require("express").Router();

// default root
router.get("/", (req, res) => {
  res.send("Welcome");
});

// just add here the routes
[].concat(
  require("./user")
).map(route => {
  if(route.verb == 'get') router.get(route.path, route.method);
  if(route.verb == 'post') router.post(route.path, route.method);
  if(route.verb == 'put') router.put(route.path, route.method);
  if(route.verb == 'delete') router.delete(route.path, route.method);
  if(route.verb == 'head') router.head(route.path, route.method);
});

module.exports = router;