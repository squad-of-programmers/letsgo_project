const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const { stopTraffic, userСomparator } = require("../middleware/userMiddlewars");

//REGISTRATION
router //создание нового пользователя
  .route("/registration")
  .get((req, res) => {
    //При get запросе рендерим hbs
    res.render("register");
  })
  .post(async (req, res) => {
    //При POST запросе
    // console.log("req.body ==>", req.body);
    const { name, email, password } = req.body;
    if (name && email && password) {
      //хэшируем пароль при помощи bcrypt
      const hashPasswd = await bcrypt.hash(password, +process.env.SALTROUNDS);
      //
      try {
        const newUser = await User.create({
          name,
          email,
          password: hashPasswd,
        });
        req.session.user = {
          id: newUser._id,
          name: newUser.name,
          avatar: newUser.avatar,
        };
        res.locals.user = req.session.user;
        return res.redirect("/");
      } catch (err) {
        res.locals.err = "Что то не так";
        return res.redirect("/user/registration");
      }
    }
    res.locals.err = "Что то не так";
    return res.redirect("/user/registration");
  });

router
  .route("/authentication")
  .get((req, res) => {
    res.render("login");
  })
  .post(async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      const currentUser = await User.findOne({ email });
      if (
        currentUser &&
        (await bcrypt.compare(password, currentUser.password))
      ) {
        req.session.user = {
          id: currentUser._id,
          name: currentUser.name,
          avatar: currentUser.avatar,
        };
        return res.redirect("/");
      }
    }
    res.redirect("/user/authentication");
  });

router.route("/logout").get((req, res) => {
  req.session.destroy();
  res.clearCookie("sId");
  res.redirect("/");
});

router.route("/:id").get(stopTraffic, userСomparator, async (req, res) => {
  const curentUser = await User.findById(req.params.id);

  const flag = req.params.flag;

  res.render("user_cabinet", { curentUser, flag });
}); //_______________________________________________________________

//Изменение аватара
router.route("/changeavatar").post(stopTraffic, async (req, res) => {
  const newImg = req.file.filename; //Midleware,
  const user = await User.findByIdAndUpdate(
    { _id: req.session.user.id },
    { avatar: `/img/${newImg}` },
    { new: true }
  );
  req.session.user.avatar = user.avatar;
  res.json(user);
});

module.exports = router;
