import React, { useState } from 'react'
import style from '../CreateEvent/createEvent.module.scss';
import { Formik } from 'formik';

function CreateEvent(props) {
  const [success, setSuccess] = useState(false);

  function congratulations() {
    setSuccess(!success);
  }
  return (
    <div className={style.page}>
      <nav className={style.navigation}>
        <h3>Елена Николаевна, рады видеть Вас в личном кабинете!</h3>
        <div className={style.divLink}><a href="#">Выйти</a></div>
      </nav>
      <h1>Создать новое мероприятие</h1>
      <span>Все поля являются обязательными для заполнения</span>
      <div className={style.container}>
        <Formik
          initialValues={{
            title: '',
            address: '',
            programm: '',
            shortDescription: '',
            dateEvent: '',
          }}
          onSubmit={(values) => { console.log(values) }}
        >
          {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
            <div className={style.wrapper}>
              <div className={style.input}>
                <input
                  className={style.field}
                  type={'text'}
                  name={'title'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  placeholder={'Название тура'}
                />
              </div>
              <div className={style.input}>
                <input
                  className={style.field}
                  type={'text'}
                  name={'adress'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.adress}
                  placeholder={'Место проведения мероприятия'}
                />
              </div>
              <div className={style.input}>
                <input
                  className={style.field}
                  type={'text'}
                  name={'programm'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.programm}
                  placeholder={'Программа мероприятия'}
                />
              </div>
              <div className={style.input}>

                <input
                  className={style.field}
                  type={'text'}
                  name={'shortDescription'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.shortDescription}
                  placeholder={'Краткое описание'}
                />
              </div>
              <div className={style.input}>
                <input
                  className={style.field}
                  type={'date'}
                  name={'dateEvent'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dateEvent}
                  placeholder={'Дата проведения'}
                />
              </div>
              <button
                onClick={handleSubmit}
                type={'submit'}
                variant="contained"
                className={style.button}
                onClick={congratulations}
              >Создать новый тур</button>
            </div>
          )}
        </Formik>
        {success &&
          <>
            <h3>Отлично! Данные о новом туре записаны</h3>
          </>}
      </div>
    </div>
  )
}

export default CreateEvent;
