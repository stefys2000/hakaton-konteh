import { IsNotEmpty, IsString } from 'class-validator';

export class AddRoomFeatureDto {
  @IsNotEmpty()
  @IsString()
  room_feature_name: string;
}

export class UpdateRoomFeatureDto {
  @IsNotEmpty()
  @IsString()
  room_feature_id: string;

  @IsNotEmpty()
  @IsString()
  room_feature_name: string;
}

export class DeleteRoomFeatureDto {
  @IsNotEmpty()
  @IsString()
  room_feature_id: string;
}
