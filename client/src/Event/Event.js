import React, { useState } from 'react';
import style from '../Event/event.module.scss';

function Event({ title, address, programmTiming, shortDescription, dateEvent }) {
  const [detail, setDetail] = useState(false)

  function detailInfo() {
    setDetail(!detail);
  }

  return (
    <>
      {!detail && <div className={style.wrapper} onClick={detailInfo}>
        <p>название мероприятия: {title}</p>
        <p>место проведения: {address}</p>
        <p>дата проведения: {dateEvent}</p>
      </div>}
      {detail &&
        <>
          <div className={style.wrapper} onClick={detailInfo}>
            <h3>Детальная информация</h3>
            <p>название мероприятия: {title}</p>
            <p>место проведения: {address}</p>
            <p>место проведения: {programmTiming}</p>
            <p>место проведения: {shortDescription}</p>
            <p>дата проведения: {dateEvent}</p>
            <button>Хочу поехать!</button>
          </div>
        </>}
    </>
  )
}

export default Event;
