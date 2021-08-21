import React from 'react';
import style from '../Events/events.module.scss';
import { events } from '../events';
import Event from '../Event/Event';

function Events(props) {
  

  return (
    <>
    <nav>Рады приветствовать Вас, Олег!</nav>
    <h1>Предстоящие мероприятия</h1>
      {events.map((element) => (
        <Event title={element.title} address={element.address} programmTiming={element.programmTiming} shortDescription={element.shortDescription} dateEvent={element.dateEvent} />
      ))}
    </>
  )
}

export default Events
