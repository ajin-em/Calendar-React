import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarComponent({ selectedDate, events, onDateClick }) {
  return (
    <div className="flex-1 max-w-md mr-8 mb-8 md:mb-0">
      <Calendar
        value={selectedDate}
        onClickDay={onDateClick}
        tileClassName={({ date }) =>
          selectedDate &&
            date.toDateString() === selectedDate.toDateString()
            ? "selected"
            : events.some(
              (event) => new Date(event.date).toDateString() === date.toDateString()
            )
              ? "event-marked"
              : ""
        }
      />
    </div>
  );
}

export default CalendarComponent;
