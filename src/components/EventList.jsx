import EventCard from "./EventCard";

function EventList({ events, selectedDate, onUpdateEvent, onDeleteEvent }) {
    return (
        <div className="mt-8">
            <h2 className="text-2xl mb-4">My Created Event List</h2>
            <div className="flex flex-wrap justify-center">
                {events.map((event) =>
                    event.date.toDateString() === selectedDate.toDateString() ? (
                        <EventCard
                            key={event.id}
                            event={event}
                            onUpdateEvent={onUpdateEvent}
                            onDeleteEvent={onDeleteEvent}
                        />
                    ) : null
                )}
            </div>
        </div>
    );
}

export default EventList;