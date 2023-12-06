import { Module } from '@nestjs/common';
import { DigimonController } from './digimon.controller';
import { HttpModule } from '@nestjs/axios';
import { DigimonRepository } from './digimon.repository';
import { DigimonSeedService } from './digimon-seed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Digimon } from './digimon.entity';
import { DigimonServices } from './digimon.services';

@Module({
  controllers: [DigimonController],
  imports: [HttpModule, TypeOrmModule.forFeature([Digimon])],
  providers: [DigimonRepository, DigimonSeedService, DigimonServices],
})
export class DigimonModule {}
