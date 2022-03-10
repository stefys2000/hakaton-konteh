import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class RegisterFacultyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  opens: string;

  @IsNotEmpty()
  @IsString()
  closes: string;
}

export class UpdateFacultyDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  opens: string;

  @IsOptional()
  @IsString()
  closes: string;
}
