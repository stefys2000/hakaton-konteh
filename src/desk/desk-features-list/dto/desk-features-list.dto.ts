import { IsNotEmpty, IsUUID } from 'class-validator';
import { DeskFeature } from "../../deskFeatures/deskFeatures.entity";

export class AddFeatureToDeskDto {
  @IsNotEmpty()
  @IsUUID()
  desk_id: string;

  @IsNotEmpty()
  @IsUUID()
  desk_feature_id: string;
}

export class FilterDeskFeturesDto {
  @IsNotEmpty()
  filter: DeskFeature[];
}
