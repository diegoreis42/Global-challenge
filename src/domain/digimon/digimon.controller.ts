import {
  Controller,
  Get,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DigimonRepository } from './digimon.repository';
import { DigimonLevelDto, DigimonNameDto } from './dtos';
import { DigimonServices } from './digimon.services';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Digimon')
@Controller('digimon')
@UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
export class DigimonController {
  constructor(
    private readonly digimonRepository: DigimonRepository,
    private readonly digimonService: DigimonServices,
  ) {}

  @ApiResponse({ status: 200, description: 'Devolve todos os digimons' })
  @Get()
  findAll() {
    return this.digimonRepository.findAll();
  }

  @ApiResponse({ status: 200, description: 'Devolve um digimon pelo nome' })
  @Get('/name/:name')
  findOneByName(@Param() digimonName: DigimonNameDto) {
    return this.digimonService.findOneByName(digimonName.name);
  }

  @ApiResponse({
    status: 200,
    description: 'Devolve todos os digimons que possuem o pattern da pesquisa',
  })
  @ApiQuery({
    name: 'name',
    example: 'ta%',
    description:
      "A query abaixo devolve todos os digimons que começam com 'ta'",
  })
  @Get('/name')
  findOneByPartialName(@Query() queryDigimon: DigimonNameDto) {
    return this.digimonRepository.findPartialByName(queryDigimon.name);
  }

  @ApiResponse({
    status: 200,
    description: 'Devolve todos os digimons de um determinado level',
  })
  @Get('/level/:level')
  findByLevel(@Param() digimonLevel: DigimonLevelDto) {
    return this.digimonRepository.findByLevel(digimonLevel.level);
  }
}
