const User = require("../models/userModel");
function userChecker(req, res, next) {
  if (req.session?.user?.id) {
    // console.log("req.session ==>", req.session);
    res.locals.user = req.session.user;
    return next();
  }
  next();
}

function stopTraffic(req, res, next) {
  if (req.session?.user?.id) {
    return next();
  } else return res.redirect("/user/authentication");
}

function userСomparator(req, res, next) {
  if (req.params.id === req.session.user.id) {
    req.params.flag = true;
    console.log(req.params.flag);
    return next();
  } else {
    return next();
  }
}

module.exports = {
  userChecker,
  stopTraffic,
  userСomparator,
};
