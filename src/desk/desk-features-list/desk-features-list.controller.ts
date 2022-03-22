import { Body, Controller, Post } from '@nestjs/common';
import { DeskFeaturesListService } from './desk-features-list.service';
import { AddFeatureToDeskDto } from './dto/desk-features-list.dto';

@Controller('desk-features-list')
export class DeskFeaturesListController {
  constructor(private deskFeaturesListService: DeskFeaturesListService) {}

  @Post()
  async assignFeatureToDesk(
    @Body() addFeatureToDeskDto: AddFeatureToDeskDto,
  ): Promise<void> {
    return await this.deskFeaturesListService.assignFeatureToDesk(
      addFeatureToDeskDto,
    );
  }
}
