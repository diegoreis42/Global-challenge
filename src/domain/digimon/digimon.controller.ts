import {
  Controller,
  Get,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DigimonRepository } from './digimon.repository';
import { DigimonLevelDto, DigimonNameDto } from './dtos';
import { DigimonServices } from './digimon.services';

@Controller('digimon')
@UsePipes(new ValidationPipe({ whitelist: true }))
export class DigimonController {
  constructor(
    private readonly digimonRepository: DigimonRepository,
    private readonly digimonService: DigimonServices,
  ) {}

  @Get()
  findAll() {
    return this.digimonRepository.findAll();
  }

  @Get('/name/:name')
  findOneByName(@Param() digimonName: DigimonNameDto) {
    return this.digimonService.findOneByName(digimonName.name);
  }

  @Get('/level/:level')
  findByLevel(@Param() digimonLevel: DigimonLevelDto) {
    return this.digimonRepository.findByLevel(digimonLevel.level);
  }
}
