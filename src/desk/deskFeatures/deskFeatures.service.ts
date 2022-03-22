import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeskFeaturesRepository } from './deskFeatures.repository';
import {
  AddDeskFeatureDto,
  DeleteDeskFeatureDto,
  UpdateDeskFeatureDto,
} from './dto/deskFeatures.dto';
import { DeskFeature } from './deskFeatures.entity';

@Injectable()
export class DeskFeaturesService {
  constructor(
    @InjectRepository(DeskFeaturesRepository)
    private deskFeaturesRepository: DeskFeaturesRepository,
  ) {}

  async getAllDeskFeatures(): Promise<DeskFeature[]> {
    return await this.deskFeaturesRepository.find();
  }

  async getDeskFeatureById(desk_feature_id: string): Promise<DeskFeature> {
    const found = await this.deskFeaturesRepository.findOne(desk_feature_id);
    if (!found) {
      throw new NotFoundException('Desk feature not found');
    }
    return found;
  }

  async addDeskFeature(addDeskFeatureDto: AddDeskFeatureDto): Promise<void> {
    const foundDesk = await this.deskFeaturesRepository.findOne(
      addDeskFeatureDto,
    );
    console.log(foundDesk);
    if (foundDesk) {
      throw new BadRequestException('Desk feature already exists');
    }
    const desk = this.deskFeaturesRepository.create(addDeskFeatureDto);
    try {
      await this.deskFeaturesRepository.save(desk);
    } catch (error) {
      throw new ConflictException(error);
    }
  }

  async updateDeskFeature(
    updateDeskFeatureDto: UpdateDeskFeatureDto,
  ): Promise<void> {
    const { desk_feature_id, desk_feature_name } = updateDeskFeatureDto;
    const desk = await this.getDeskFeatureById(desk_feature_id);
    desk.desk_feature_name = desk_feature_name;
    try {
      await this.deskFeaturesRepository.save(desk);
    } catch (error) {
      throw new ConflictException(error);
    }
  }

  async deleteDeskFeature(
    deleteDeskFeatureDto: DeleteDeskFeatureDto,
  ): Promise<void> {
    const { desk_feature_id } = deleteDeskFeatureDto;
    const desk = await this.getDeskFeatureById(desk_feature_id);
    try {
      await this.deskFeaturesRepository.delete(desk);
    } catch (error) {
      throw new ConflictException(error);
    }
  }
}
