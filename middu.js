module.exports = reqFilter = (req, resp, next) => {
    // console.log("reqFilter");
    if (!req.query.age) {
      resp.send("PLEASE PROVIDE AGE");
    } else if (req.query.age < 18) {
      resp.send("age restricted page");
    } else {
      next();
    }
    next();
  };