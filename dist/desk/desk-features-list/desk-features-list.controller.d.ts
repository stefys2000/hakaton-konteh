import { DeskFeaturesListService } from './desk-features-list.service';
import { AddFeatureToDeskDto } from './dto/desk-features-list.dto';
export declare class DeskFeaturesListController {
    private deskFeaturesListService;
    constructor(deskFeaturesListService: DeskFeaturesListService);
    assignFeatureToDesk(addFeatureToDeskDto: AddFeatureToDeskDto): Promise<void>;
}
