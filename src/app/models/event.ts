import { User } from './user';

export class Event {
    id: number;
    name: string;
    description?: string;
    eventDate: string;
    users: User[];
}
