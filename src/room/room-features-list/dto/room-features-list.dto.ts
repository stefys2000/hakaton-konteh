import { IsNotEmpty, IsUUID } from 'class-validator';

export class AddFeatureToRoomDto {
  @IsNotEmpty()
  @IsUUID()
  room_id: string;

  @IsNotEmpty()
  @IsUUID()
  room_feature_id: string;
}
