import { DeskFeature } from "../../deskFeatures/deskFeatures.entity";
export declare class AddFeatureToDeskDto {
    desk_id: string;
    desk_feature_id: string;
}
export declare class FilterDeskFeturesDto {
    filter: DeskFeature[];
}
