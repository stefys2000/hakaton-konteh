import { IsNotEmpty, IsString } from 'class-validator';

export class AddDeskFeatureDto {
  @IsNotEmpty()
  @IsString()
  desk_feature_name: string;
}

export class UpdateDeskFeatureDto {
  @IsNotEmpty()
  @IsString()
  desk_feature_id: string;

  @IsNotEmpty()
  @IsString()
  desk_feature_name: string;
}

export class DeleteDeskFeatureDto {
  @IsNotEmpty()
  @IsString()
  desk_feature_id: string;
}
