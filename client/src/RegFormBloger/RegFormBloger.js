import React from 'react';
import { Formik, Field } from 'formik';
import style from '../RegFormBloger/regFormBloger.module.scss';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import CallIcon from '@material-ui/icons/Call';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import GroupIcon from '@material-ui/icons/Group';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import ExploreIcon from '@material-ui/icons/Explore';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import InstagramIcon from '@material-ui/icons/Instagram';
import DescriptionIcon from '@material-ui/icons/Description';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PersonIcon from '@material-ui/icons/Person';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

function RegFormBloger() {

  return (
    <div className={style.flexContainer}>
      <div className={style.container}>
        <div className={style.leftBlock}>
          <h1>Начни путешествовать вместе с нами.</h1>
          <h2>Сегодня.</h2>
          <EmojiPeopleIcon style={{fontSize: 450, marginLeft: -250}}/>
        </div>
        <Formik
          initialValues={{
            social: '',
            firstName: '',
            lastName: '',
            followers: '',
            posts: '',
            phone: '',
            location: '',
            email: '',
            sphere: '',
            shortDescription: '',
            password: '',
          }}
          onSubmit={(values) => { console.log(values) }}
        >
          {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
            <div className={style.wrapper}>
              <h1>Регистрация блогера, представителя СМИ</h1>
              <div className={style.input}>
                <InstagramIcon style={{ fontSize: 40 }} />
                <Field
                  className={style.field}
                  type={'text'}
                  name={'social'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.social}
                  placeholder={'Социальная сеть'}
                />
              </div>
              <div className={style.input}>
                <PersonOutlineIcon style={{ fontSize: 40 }} />
                <input
                  className={style.field}
                  type={'text'}
                  name={'firstName'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  placeholder={'Имя'}
                />
              </div>
              <div className={style.input}>
                <PersonIcon style={{ fontSize: 40 }} />
                <input
                  className={style.field}
                  type={'text'}
                  name={'lastName'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  placeholder={'Фамилия'}
                />
              </div>
              <div className={style.input}>
                <GroupIcon style={{ fontSize: 40 }} />
                <input
                  className={style.field}
                  type={'text'}
                  name={'followers'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.followers}
                  placeholder={'Количество подписчиков'}
                />
              </div>
              <div className={style.input}>
                <FeaturedPlayListIcon style={{ fontSize: 40 }} />
                <input
                  className={style.field}
                  type={'text'}
                  name={'posts'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.posts}
                  placeholder={'Количество публикаций'}
                />
              </div>
              <div className={style.input}>
                <CallIcon style={{ fontSize: 40 }} />
                <input
                  className={style.field}
                  type={'text'}
                  name={'phone'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  placeholder={'Телефон'}
                />
              </div>
              <div className={style.input}>
                <AlternateEmailIcon style={{ fontSize: 40 }} />
                <input
                  className={style.field}
                  type={'email'}
                  name={'email'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder={'Электронная почта'}
                />
              </div>
              <div className={style.input}>
                <ExploreIcon style={{ fontSize: 40 }} />
                <input
                  className={style.field}
                  type={'text'}
                  name={'location'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.location}
                  placeholder={'Город проживания'}
                />
              </div>
              <div className={style.input}>
                <CameraAltIcon style={{ fontSize: 40 }} />
                <input
                  className={style.field}
                  type={'text'}
                  name={'sphere'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.sphere}
                  placeholder={'Направление / сфера'}
                />
              </div>
              <div className={style.input}>
                <DescriptionIcon style={{ fontSize: 40 }} />
                <input
                  className={style.field}
                  type={'text'}
                  name={'shortDescription'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.shortDescription}
                  placeholder={'Краткое описание аккаунта'}
                />
              </div>
              <div className={style.input}>
                <VpnKeyIcon style={{ fontSize: 40 }} />
                <input
                  className={style.field}
                  type={'password'}
                  name={'password'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder={'Пароль'}
                />
              </div>
              <button
                onClick={handleSubmit}
                type={'submit'}
                variant="contained"
                className={style.button}
              >Зарегистрироваться</button>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default RegFormBloger