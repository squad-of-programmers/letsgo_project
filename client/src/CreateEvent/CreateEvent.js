import React from 'react'
import style from '../CreateEvent/createEvent.module.scss';
import { Formik } from 'formik';

function CreateEvent(props) {


  return (
    <>
      <h1>Создать новое мероприятие</h1>
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
                  {/* <PersonOutlineIcon style={{ fontSize: 40 }} /> */}
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
                  {/* <PersonIcon style={{ fontSize: 40 }} /> */}
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
                  {/* <GroupIcon style={{ fontSize: 40 }} /> */}
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
                  {/* <FeaturedPlayListIcon style={{ fontSize: 40 }} /> */}
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
                  {/* <CallIcon style={{ fontSize: 40 }} /> */}
                  <input
                    className={style.field}
                    type={'text'}
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
                >Создать</button>
              </div>
            )}
          </Formik>
        </div>
    </>
  )
}

export default CreateEvent;
