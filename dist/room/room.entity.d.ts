import { Faculty } from '../faculty/faculty.entity';
import { Desk } from '../desk/desk.entity';
import { RoomFeaturesList } from './room-features-list/room-features-list.entity';
export declare class Room {
    id: string;
    name: string;
    faculty: Faculty;
    desk: Desk[];
    roomFeaturesList: RoomFeaturesList[];
}
