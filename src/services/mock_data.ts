import { Event } from '../types';

let events: Event[] = [
    {
        id: '36d54178-a361-4555-841e-e1b767c9fd2b',
        user_id: 'e952a525-f62f-4758-8b4d-6cbc6e71efa9',
        name: 'Rolê na Serra',
        about: 'Vamos subir o Pico do Vale pra ver a beleza do lugar',
        start_datetime: new Date(),
        end_datetime: new Date(),
        places: [
            {
                address: 'Pico do Vale',
                location: {
                    lat: -15.244033,
                    lng: -49.589496,
                },
            },
        ],
        created_at: new Date(),
        updated_at: new Date(),
    },
    {
        id: '90d54178-a361-4555-841e-e1b767c9fd2b',
        user_id: 'e952a525-f62f-4758-8b4d-6cbc6e71efa9',
        name: 'Rolê no Curumin',
        about: 'De bobeira na pista de skate',
        start_datetime: new Date(),
        end_datetime: new Date(),
        places: [
            {
                address: 'Parque Curumin, Ceres, Goiás',
                location: {
                    lat: -15.310863,
                    lng: -49.605907,
                },
            },
        ],
        created_at: new Date(),
        updated_at: new Date(),
    },
];

export function getEvents(): Event[] | undefined {
    return events;
}

export function getEvent(event_id: string): Event | undefined {
    const event = events.find((e) => e.id === event_id);

    return event;
}
