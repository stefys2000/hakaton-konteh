import { Module } from '@nestjs/common';
import { DeskReservationsController } from './desk-reservations.controller';
import { DeskReservationsService } from './desk-reservations.service';

@Module({
  controllers: [DeskReservationsController],
  providers: [DeskReservationsService]
})
export class DeskReservationsModule {}
