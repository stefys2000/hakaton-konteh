import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class RegisterRoomDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsUUID()
  faculty_id: string;
}

export class FacultyRoomsDto {
  @IsNotEmpty()
  @IsUUID()
  faculty_id: string;
}

export class UpdateRoomDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsUUID()
  faculty_id: string;
}
