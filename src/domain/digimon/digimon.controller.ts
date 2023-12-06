import { Controller, Get } from '@nestjs/common';
import { DigimonRepository } from './digimon.repository';

@Controller('digimon')
export class DigimonController {
  constructor(private readonly digimonRepository: DigimonRepository) {}

  @Get()
  findAll() {
    return this.digimonRepository.findAll();
  }
}
