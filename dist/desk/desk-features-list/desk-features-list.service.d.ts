import { DeskFeaturesListRepository } from './desk-features-list.repository';
import { DeskService } from '../desk.service';
import { DeskFeaturesService } from '../deskFeatures/deskFeatures.service';
import { AddFeatureToDeskDto } from './dto/desk-features-list.dto';
export declare class DeskFeaturesListService {
    private deskFeaturesListRepository;
    private deskService;
    private deskFeaturesService;
    constructor(deskFeaturesListRepository: DeskFeaturesListRepository, deskService: DeskService, deskFeaturesService: DeskFeaturesService);
    assignFeatureToDesk(addFeatureToDeskDto: AddFeatureToDeskDto): Promise<void>;
}
