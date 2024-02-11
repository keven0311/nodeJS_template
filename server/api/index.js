const router = require("express").Router();

//api routes:
//router.use("/user", require("./user.js"))
router.use("/test",require("./test.js"))



//general error handling:
router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
