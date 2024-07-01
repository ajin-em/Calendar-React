import { useEffect, useState } from 'react';
import CalendarComponent from './components/CalendarComponent';
import EventForm from './components/EventForm';
import EventList from './components/EventList';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventName, setEventName] = useState("");
  const [events, setEvents] = useState(() => {
    const storedEvents = localStorage.getItem("events");
    return storedEvents
      ? JSON.parse(storedEvents).map(event => ({
          ...event,
          date: new Date(event.date)
        }))
      : [];
  });

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const Date_Click_Fun = (date) => {
    setSelectedDate(date);
  };

  const Event_Data_Update = (event) => {
    setEventName(event.target.value);
  };

  const Create_Event_Fun = () => {
    if (selectedDate && eventName) {
      const newEvent = {
        id: new Date().getTime(),
        date: selectedDate,
        title: eventName,
      };
      setEvents([...events, newEvent]);
      setSelectedDate(null);
      setEventName("");
      setSelectedDate(newEvent.date);
    }
  };

  const Update_Event_Fun = (eventId, newName) => {
    const updated_Events = events.map((event) => {
      if (event.id === eventId) {
        return {
          ...event,
          title: newName,
        };
      }
      return event;
    });
    setEvents(updated_Events);
  };

  const Delete_Event_Fun = (eventId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this event?");
    if (confirmDelete) {
      const updated_Events = events.filter((event) => event.id !== eventId);
      setEvents(updated_Events);
    }
  };

  return (
    <div className="text-center mt-8">
      <h1 className="text-4xl mb-8 text-green-500">Calendar</h1>
      <div className="flex flex-wrap justify-center items-start mt-8">
        <CalendarComponent
          selectedDate={selectedDate}
          events={events}
          onDateClick={Date_Click_Fun}
        />
        <div className="flex-1 max-w-md">
          {selectedDate && (
            <EventForm
              selectedDate={selectedDate}
              eventName={eventName}
              onEventNameChange={Event_Data_Update}
              onCreateEvent={Create_Event_Fun}
            />
          )}
          {events.length > 0 && selectedDate && (
            <EventList
              events={events}
              selectedDate={selectedDate}
              onUpdateEvent={Update_Event_Fun}
              onDeleteEvent={Delete_Event_Fun}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
