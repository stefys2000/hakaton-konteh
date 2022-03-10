import { Faculty } from '../faculty/faculty.entity';
import { Desk } from '../desk/desk.entity';
export declare class Room {
    id: string;
    name: string;
    faculty: Faculty;
    desk: Desk[];
}
