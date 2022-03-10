import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class RegisterDeskDto {
  @IsNotEmpty()
  @IsUUID()
  room_id: string;
}

export class DeskByRoomDto {
  @IsNotEmpty()
  @IsUUID()
  room_id: string;
}

export class UpdateDeskDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsOptional()
  @IsUUID()
  room_id;
}

export class AssignUserDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsUUID()
  user_id: string;
}

export class DeleteDeskDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
