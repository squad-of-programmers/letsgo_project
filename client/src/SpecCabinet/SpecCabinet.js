import React from 'react';
import style from '../SpecCabinet/specCabinet.module.scss';

function SpecCabinet(props) {


  return (
    <>
      <nav className={style.navigation}>
        <h3>Елена Николаевна, рады видеть Вас в личном кабинете!</h3>
        <a href="#">Выйти</a>
      </nav>
      <div className={style.card}><a href="/eventNew">Создать новое мероприятие</a></div>
      <div className={style.card}>Просмотреть блогеров из базы данных</div>
      <div className={style.card}>Отобрать и согласовать участников мероприятия</div>

    </>
  )
}

export default SpecCabinet