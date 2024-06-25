function EventCard({ event, onUpdateEvent, onDeleteEvent }) {
  return (
    <div className="w-72 bg-white rounded shadow p-4 m-2 hover:shadow-lg transform hover:-translate-y-1">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg text-orange-500">{event.date.toDateString()}</span>
        <div className="flex">
          <button
            className="p-2 bg-blue-500 text-white rounded mr-2 hover:bg-blue-600"
            onClick={() => onUpdateEvent(event.id, prompt("ENTER NEW TITLE"))}
          >
            Update Event
          </button>
          <button
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => onDeleteEvent(event.id)}
          >
            Delete Event
          </button>
        </div>
      </div>
      <div>
        <p className="text-xl text-red-500">{event.title}</p>
      </div>
    </div>
  );
}

export default EventCard;