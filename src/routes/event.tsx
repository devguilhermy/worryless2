import { getEvent } from '../services/mock_data';
import { useParams } from 'react-router-dom';

export default function Event() {
    const params = useParams();

    const event = getEvent(params.event_id || '');

    return <h2>{event?.about}</h2>;
}
