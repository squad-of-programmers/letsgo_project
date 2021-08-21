# lets go! todo list, api doc

### Начало работы (для запуска проекта нужна нода 14 версии)
1. делаем git clone + скопированный путь в терминале, где открыта нужная папка.
![clone](http://images.vfl.ru/ii/1629527441/386ede7e/35572939.png)


2. В терминале открываем папку server и вводим команду **npm i** - для того, чтобы все зависимости установились, а далее **node seed.js** и **node server.js**

3. В терминале открываем папку client и вводим команду **yarn** - для того, чтобы все зависимости установились, а далее **yarn start**
В этот момент в браузере откроется наше приложение
![main page](http://images.vfl.ru/ii/1629567287/e577e9cf/35578525.png)

### Данные для заполнения табличной части приходят из базы данных
http://images.vfl.ru/ii/1629567426/11d4ce10/35578569.png


### Внешний вид личного кабинета блогера
![lk department](http://images.vfl.ru/ii/1629525797/e0f3a98d/35572791.png)

### Внешний вид личного кабинета сотрудника департамента туризма
![lk department](http://images.vfl.ru/ii/1629525797/e0f3a98d/35572791.png)

### Страница из личного кабинета сотрудника департамента туризма, на которой можно ознакомиться с блогерами, информация о которых имеется в базе данных
![bloggers from data base](http://images.vfl.ru/ii/1629545446/d52db8c9/35575559.png)

### Создание нового мероприятия / турах сотрудником департамента туризма
![create event](http://images.vfl.ru/ii/1629545515/37e2f5fd/35575578.png)

### Детальная информация о мероприятии, которую видит блогер
![detail info event](http://images.vfl.ru/ii/1629545622/880992eb/35575592.png)

### Форма регистрации блогера, представителя СМИ
![blogger registry](http://images.vfl.ru/ii/1629519627/190600c7/35572362.png)

### Внешний вид личного кабинета блогера, представителя СМИ
![lk blogger](http://images.vfl.ru/ii/1629545704/a1940cba/35575609.png)

### Имеется возможность **сортировки** данных в столбцах с *локация*, *количество подписчиков*, *количество посещенных мероприятий*. Для этого нужно нажать на сам заголовок
![sort](http://images.vfl.ru/ii/1629525560/f054a99f/35572738.jpg)

### Сотрудник департамента может выбрать столбцы с информацией для отображения
![sort](http://images.vfl.ru/ii/1629527121/03d714a3/35572912.jpg)

### В работе использован react-router
![routing](http://images.vfl.ru/ii/1629545762/44cdb3d2/35575620.png)

### Информация о блогерах, мероприятиях хранится в MongoBD




## todo items:
* [ ] Просмотр списка блогеров
    * [ ] Добавление блогера в группу
    * [ ] Удаление блогера из поиска
  
* [ ] тур
    * [ ] Создание с указанием даты? проведения
    * [ ] Удаление
    * [ ] Изменение
    * [ ] Добавление места/пункта в тур с указанием времени
    * [ ] Удаление места/пункта из тура
* [ ] место/пункт/event
    * [ ] Создание 
    * [ ] Удаление  
    * [ ] Изменение
    

* [ ] Создание новой группы блогеров
  ```txt
  Предлагаю сделать так:
  на старнице просмотра/отбора новых блогеров 
  можно будет помечать галочкой нужные поля людей и потом нажать 
  на кнопку сверху 'добавить в группу' - это выпадающее меню где
  можно посмотреть все группы и если нужной ещё нет то в том же списке
  есть кнопка `add new`
  ```
* [ ] Просмотр группы блогеров
* [ ] Написание сообщения и рассылка приглашений группе (на email)
* [ ] Отправка приглашения на email одному блогеру

* [ ] Страница с новостями и ближайшими турами


* [ ] добавление парсера c соцсетей
    * [ ] facebook
    * [ ] instagram

#
## questions:
* date/dates/range in tours?
* PUT or PATCH? or Post?


Почему django?
Я вижу у Django следующие преймущества:
* Простота и обширный набор функций, позволяющая с высокой скоростью создать приложение
* Достаточно высокая производительность для приложения с невысокой нагрузкой на бд(основные пользователи сайта - администраторы мин. туризма опр. города)

#
## api:
* [ ] GET: http://host/bloggers/ - получение списка блогеров
```json5
{
  "bloggers": [
    {
      "id": 12345,
      "login": "MisterIvanov67",
      "name": "Ivanov",
      "lastname": "Ivanov",
      "email": "some@email.com",
      "tel": "+78002223523",
      "avatar": "media/avatars/...", // "" if there is no avatar
      "gender": 'm'|'w',
      "is_archive": true/false, 
      // если блогер отказал, то true, а false получим через месяц
      // предлагаю также добавить фильтр на это поле
      
      // думаю, если блогер уже в туре - присылать его не будем
      // также не будем его показывать, если он уже был приглашён в этом месяце
      "social_networks": {
        "facebook": {
          "link": "facebook.com/ivan",
          "subscribers": 34
        },
        "instagram": {
          "link": "instagram.com/ivan",
          "subscribers": 378,
          "posts": 343
        },
        // данные разных соцсетей могут отличаться
        // ... There will be more fields in the future
      }
      
    },
    // ...
  ]
}  
```
  


* [ ] DELETE: http://host/bloggers/{blogger_id}/ - удаление блогера из поиска полностью
* [ ] PUT: http://host/groups/{group_id}/bloggers/{blogger_id}/ - добавление блогера в группу
* [ ] POST: http://host/groups/{group_id}/send_invitation/ - отправка письма группе блогеров 
```json5
{
  "title": "some text",
  "body": "some text",
  "recipients": [123, 1214, 11], // ids of bloggers
  
}
```


* [ ] POST: http://host/bloggers/{blogger_id}/send_invitation/ - отправка письма одному блогеру
```json5
{
  "title": "some text",
  "body": "some text",
  "recipients": [123, 1214, 11], // ids of bloggers
  
}
```


* [ ] GET: http://host/events - получить места/events для посещения блогерами
```json5
// получаем следующее
{
  "points": [
    {
      "id": 1234,
      "title": "museum",
      "description": "some text",
      "address": "Samara, some street 3",
    },
    // ...
  ]
}
```
* [ ] POST: http://host/groups/ - создание группы с выбранными блогерами
```json5
{
  "bloggers": [123, 1214, 11], // ids of bloggers
}
```


* [ ] GET: http://host/groups/{group_id} - получение группы со списком блогеров
```json5
{
  "bloggers": [123, 1214, 11], // ids of bloggers
}
```


* [ ] POST: http://host/tours/ - Создание тура
```json5
{
  "title": "some text",
  "description": "some text",
  "date": 14351345,
  "events": [
    {
      "title": "some text",
      "description": "some text",
      "address": "Samara, some street 3",
      "time": timestamp, 
    },
    // ...
  ]
}
```

* [ ] DELETE: http://host/tours/ - Удаление мероприятия
* [ ] PUT: http://host/tours/{tour_id} - Изменение данных мероприятия
```json5
{
  "title": "some text",
  "description": "some text",
  "date": "",
  "points": [
    {
      "point_id": 1,
      "title": "выезд из департамента",
      "time": timestamp,
    },
    // ...
  ]
}
```
* [ ] POST: http://host/tours/{tour_id}/points/{point_id} - Добавление пункта в тур 
```json5
{
  "title": "выезд из департамента",
  "time": timestamp,
}
```
* [ ] DELETE: http://host/tours/{tour_id}/points/{point_id} - Открепление пункта из тура


* [ ] PUT: http://host/events/{point_id} - Изменение пункта
```json5
{
  "point_id": 1,
  "title": "выезд из департамента",
  "time": timestamp,
}
```
