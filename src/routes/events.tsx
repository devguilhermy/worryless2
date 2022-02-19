import { getEvents } from '../services/mock_data';
import { Link, Outlet } from 'react-router-dom';

export default function Events() {
    let events = getEvents();

    return (
        <div className="flex flex-col gap-2">
            <nav className="p-1">
                {events?.map((event) => (
                    <Link
                        className="block mr-1"
                        to={`/events/${event.id}`}
                        key={event.id}
                    >
                        {event.name}
                    </Link>
                ))}
            </nav>
            <Outlet />
        </div>
    );
}
