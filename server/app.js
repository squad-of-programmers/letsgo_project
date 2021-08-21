require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const hbs = require("hbs");
const MongoStore = require("connect-mongo");
//--------------------------------------

//Загрузонька картиночек moment+multer
const multer = require("multer"); //Библиотека загрузки файлов
const moment = require("moment"); //Библиотека для вставки времени в имя файла
//--------------------------------------

//--------------------------------------
const dbConnect = require("./db");
const { userChecker } = require("./middleware/userMiddlewars");
//--------------------------------------

//Создание объекта приложения
const app = express();

//--------------------------------------

//Подключение Router'ов
const indexRouter = require("./routes/indexRouter");
const userRouter = require("./routes/userRouter");

//--------------------------------------

//Создание cookie --> req.session
const sessionParser = session({
  secret: process.env.COOKIESECRET, //берем секретную фразу из файла .env
  name: "sId", //имя cookies, которая будет создаваться
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.MONGOURL,
  }),
  cookie: {
    secure: false,
    maxAge: 6000 * 1e3, //!!!внимательно милисекунды и макс тайм 1e27
  },
});
//--------------------------------------

app.set("view engine", "hbs");
app.set("views", path.join(process.env.PWD, "views"));
app.use(express.static(path.join(process.env.PWD, "public")));
app.use(express.static("views")); //Middleware для работы front (что бы fetch мог сходить в partials)
hbs.registerPartials(path.join(process.env.PWD, "views", "partials"));

//--------------------------------------

//--------------------------------------

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(sessionParser);
app.use(userChecker);

//--------------------------------------
const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/img");
  },
  filename: (req, file, cb) => {
    const date = moment().format("DDMMYYY-HHmmss_SSS");
    cb(null, `${date}-${file.originalname}`);
  },
});

app.use(multer({ storage: storageConfig }).single("file"));
app.post("public/img", function (req, res, next) {
  let filedata = req.file;
  console.log(filedata);
  if (!filedata) res.send("Ошибка при загрузке файла");
  else res.send("Файл загружен");
});
//--------------------------------------

app.use("/", indexRouter);
app.use("/user", userRouter);

app.listen(process.env.PORT, () => {
  console.clear();
  console.log("Server has been started at PORT:", process.env.PORT);
  dbConnect();
});
