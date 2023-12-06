import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DigimonRepository } from './digimon.repository';
import { Digimon } from './digimon.entity';

@Injectable()
export class DigimonServices {
  constructor(private readonly digimonRepository: DigimonRepository) {}

  async findOneByName(name: string): Promise<Digimon> {
    const digimon: Digimon = await this.digimonRepository.findByName(name);

    if (!digimon)
      throw new HttpException('Digimon nao encontrado', HttpStatus.NOT_FOUND);

    return digimon;
  }
}
