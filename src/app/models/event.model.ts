import { User } from "./user.model";

export class Event.Model {
  id: number;
  name: string;
  description: string;
  eventDate: string;
  users: User[];
}
