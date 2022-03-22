import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeskFeaturesListRepository } from './desk-features-list.repository';
import { DeskService } from '../desk.service';
import { DeskFeaturesService } from '../deskFeatures/deskFeatures.service';
import { AddFeatureToDeskDto } from './dto/desk-features-list.dto';

@Injectable()
export class DeskFeaturesListService {
  constructor(
    @InjectRepository(DeskFeaturesListRepository)
    private deskFeaturesListRepository: DeskFeaturesListRepository,
    private deskService: DeskService,
    private deskFeaturesService: DeskFeaturesService,
  ) {}

  async assignFeatureToDesk(
    addFeatureToDeskDto: AddFeatureToDeskDto,
  ): Promise<void> {
    const { desk_id, desk_feature_id } = addFeatureToDeskDto;
    const desk = await this.deskService.getDeskById(desk_id);
    const deskFeature = await this.deskFeaturesService.getDeskFeatureById(
      desk_feature_id,
    );
    const featureToDesk = this.deskFeaturesListRepository.create({
      desk: desk,
      deskFeature: deskFeature,
    });
    try {
      await this.deskFeaturesListRepository.save(featureToDesk);
    } catch (error) {
      throw new ConflictException(error);
    }
  }
}
