export interface Place {
    address: string;
    location: { lat: number; lng: number };
}

export interface ConfirmationRequest {
    datetime: string;
    confirmed: boolean;
    triggers: Trigger[];
}

export interface Trigger {
    id: string;
    message: string;
    immediate: boolean;
    datetime?: string;
    share_last_location: boolean;
    share_last_events: boolean;
    created_at: Date;
    updated_at: Date;
}

export interface Trigger_has_Sharee {
    id: string;
    trigger_id: string;
    user_id?: string;
    group_id?: string;
    created_at: Date;
}

export interface Trigger_has_Contact {
    id: string;
    trigger_id: string;
    contact_id: string;
    created_at: Date;
}

export interface Contact {
    id: string;
    referencing_user_id?: string;
    name: string;
    about?: string;
    phone_number: string;
    email_address?: string;
    house_location?: Place;
    instagram_profile?: string;
    twitter_profile?: string;
    created_at: Date;
    updated_at: Date;
}

export interface User {
    id: string;
    name: string;
    email_address: string;
    password: string;
    phone_number: string;
    instagram_profile?: string;
    twitter_profile?: string;
    birth_date?: Date;
    // medical_information: {};
    created_at: Date;
    updated_at: Date;
}

export interface Message {
    id: string;
    group_id: string;
    sender_user_id: string;
    text_content?: string;
    attachments?: {
        type:
            | 'document'
            | 'zip'
            | 'image'
            | 'audio'
            | 'video'
            | 'program'
            | 'code';
        filename: string;
        filepath: string;
        original_filename: string;
    }[];
    event_id?: string;
}

export interface Group {
    id: string;
    name: string;
    icon: string;
    about: string;
    created_at: Date;
    updated_at: Date;
}

export interface Group_has_User {
    id: string;
    group_id: string;
    user_id: string;
    is_admin: boolean;
    created_at: Date;
}

export interface Group_has_Contact {
    id: string;
    group_id: string;
    contact_id: string;
    created_at: Date;
}

export interface Event {
    id: string;
    name: string;
    about: string;
    start_datetime: Date;
    end_datetime: Date;
    places: Place[];
    confirmation_requests?: ConfirmationRequest[];
    created_at: Date;
    updated_at: Date;
}

export interface Event_has_Sharee {
    id: string;
    event_id: string;
    user_id?: string;
    group_id?: string;
    share_at_datetime: Date;
    share_only_if_missing_confirmation: true;
    created_at: Date;
}

export interface Event_has_Contact {
    id: string;
    event_id: string;
    contact_id: string;
    created_at: Date;
}

export interface Monitoring {
    id: string;
    name: string;
    start_datetime: Date;
    end_datetime?: Date;
    confirmation_request_interval?: number;
    confirmation_requests?: ConfirmationRequest;
    created_at: Date;
    updated_at: Date;
}

export interface Monitoring_has_Sharee {
    id: string;
    monitoring_id: string;
    user_id?: string;
    group_id?: string;
    created_at: Date;
}
