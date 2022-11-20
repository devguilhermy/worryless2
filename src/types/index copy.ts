export interface Place {
    address: string;
    location: { lat: number; lng: number };
}

export interface Attachment {
    id: string;
    user_id: string;
    type: 'document' | 'zip' | 'image' | 'audio' | 'video' | 'program' | 'code';
    filename: string;
    filepath: string;
    original_filename: string;
}

export interface ConfirmationRequest {
    id: string;
    datetime: string;
    confirmed: boolean;
    triggers: Trigger[];
}

export interface Trigger {
    id: string;
    user_id: string;
    message: string;
    notes?: Note[];
    trigger_immediately: boolean;
    trigger_at_datetime?: string;
    share_last_location: boolean;
    share_last_events: boolean;
    notify_emergency_events: boolean;
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
    user_id: string;
    referencing_user_id?: string;
    name: string;
    about?: string;
    phone_number: string;
    email_address?: string;
    house_location?: Place;
    instagram_profile?: string;
    twitter_profile?: string;
    is_emergency?: boolean;
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
    medical_information?: {
        birth_date: number;
        medications: string;
        allergies: string;
        observations: string;
    };
    created_at: Date;
    updated_at: Date;
}

export interface Note {
    id: string;
    user_id: string;
    group_id: string;
    sender_user_id: string;
    title?: string;
    text_content: string;
    attachments?: Attachment[];
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
    user_id: string;
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
    user_id: string;
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
