import { User } from './user';

export class EventsDto {
    id: number;
    name: string;
    description?: string;
    eventDate: string;
    users: User[];
    checked: boolean;
}
