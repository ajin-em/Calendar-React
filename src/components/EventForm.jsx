function EventForm({ selectedDate, eventName, onEventNameChange, onCreateEvent }) {
    return (
        <div className="mb-8">
            <h2 className="text-2xl mb-4 text-blue-500">Create Event</h2>
            <p className="text-lg text-blue-700">Selected Date: {selectedDate.toDateString()}</p>
            <input
                type="text"
                placeholder="Event Name"
                value={eventName}
                onChange={onEventNameChange}
                className="p-2 text-lg border rounded mb-4"
            />
            <button
                className="p-2 bg-green-400 text-white rounded ml-2 hover:bg-green-500"
                onClick={onCreateEvent}
            >
                Click Here to Add Event
            </button>
        </div>
    );
}

export default EventForm;
