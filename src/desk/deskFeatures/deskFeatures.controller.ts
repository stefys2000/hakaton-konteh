import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { DeskFeaturesService } from './deskFeatures.service';
import {
  AddDeskFeatureDto,
  DeleteDeskFeatureDto,
  UpdateDeskFeatureDto,
} from './dto/deskFeatures.dto';
import { DeskFeature } from './deskFeatures.entity';

@Controller('deskFeatures')
export class DeskFeaturesController {
  constructor(private deskFeaturesService: DeskFeaturesService) {}

  @Get()
  async getAllDeskFeatures(): Promise<DeskFeature[]> {
    return await this.deskFeaturesService.getAllDeskFeatures();
  }

  @Post()
  async addDeskFeature(
    @Body() addDeskFeatureDto: AddDeskFeatureDto,
  ): Promise<void> {
    return await this.deskFeaturesService.addDeskFeature(addDeskFeatureDto);
  }

  @Patch()
  async updateDeskFeature(
    @Body() updateDeskFeatureDto: UpdateDeskFeatureDto,
  ): Promise<void> {
    return await this.deskFeaturesService.updateDeskFeature(
      updateDeskFeatureDto,
    );
  }

  @Delete()
  async deleteDeskFeature(
    @Body() deleteDeskFeatureDto: DeleteDeskFeatureDto,
  ): Promise<void> {
    return await this.deskFeaturesService.deleteDeskFeature(
      deleteDeskFeatureDto,
    );
  }
}
