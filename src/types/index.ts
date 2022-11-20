export interface Event {
	id: string;
	title: string;
	description: string;
	datetimeStart: string;
	datetimeEnd: string;
	places: {
		order?: number;
		name: string;
		about?: string;
		address: Address;
	}[];
	contacts: string[];
}

export interface Contact {
	id: string;
	createdByUserId: string;
	referencesUserId: string;
	name: string;
	phoneNumber: string;
	email: string;
	houseAddress?: Address;
	about: string;
}

export interface Address {
	text: string;
	street: string;
	neighborhood: string;
	city: string;
	state: string;
	country: string;
	coordinates?: {
		latitude: number;
		longitude: number;
	};
}
