const { model, Schema } = require("mongoose");

const UserSchema = Schema({
  avatar: {
    type: String,
    default: "/img/default-user-icon-4.jpeg",
  },
  name: {
    type: String, //тип переменной
    required: true, //обязательно к заполнению иначе ошибка базы данных
    min: 3, //минимальная длинна
  },
  email: {
    type: String,
    unique: true, //должен быть уникальным иначе ошибка базы данных
    required: true, //обязательно к заполнению иначе ошибка базы данных
    min: 3, //минимальная длинна
  },
  password: {
    type: String, //тип переменной
    required: true, //обязательно к заполнению иначе ошибка базы данных
    min: 3, //минимальная длинна
  },
});

module.exports = model("User", UserSchema);
