import { DeskFeaturesService } from './desk.features.service';
import { AddDeskFeatureDto } from './dto/desk.feaatures.dto';
export declare class DeskFeaturesController {
    private deskFeaturesService;
    constructor(deskFeaturesService: DeskFeaturesService);
    addDeskFeature(addDeskFeatureDto: AddDeskFeatureDto): Promise<void>;
}
