import { Module } from '@nestjs/common';
import { DigimonController } from './digimon.controller';
import { HttpModule } from '@nestjs/axios';
import { DigimonRepository } from './digimon.repository';
import { DigimonSeedService } from './digimon-seed.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Digimon } from './digimon.entity';

@Module({
  controllers: [DigimonController],
  imports: [HttpModule, TypeOrmModule.forFeature([Digimon])],
  providers: [DigimonRepository, DigimonSeedService],
})
export class DigimonModule {}
