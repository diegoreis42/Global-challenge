import { Module } from '@nestjs/common';
import { DigimonController } from './digimon.controller';

@Module({
  controllers: [DigimonController],
})
export class DigimonModule {}
