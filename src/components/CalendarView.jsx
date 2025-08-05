import React from 'react';
import Card from './Card';

const CalendarView = ({ itinerary }) => {
  return (
    <div className="calendar-grid">
      {itinerary.map((day) => (
        <Card key={day.day} className="calendar-day">
          <div className="day-number">{day.day}</div>
          <div className="day-activity">
            {day.title}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CalendarView;