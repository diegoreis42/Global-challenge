import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Digimon } from './digimon.entity';
import { Repository } from 'typeorm';
import { DigimonLevelsEnum } from './enums';

@Injectable()
export class DigimonRepository {
  constructor(
    @InjectRepository(Digimon)
    private readonly digimonRepository: Repository<Digimon>,
  ) {}

  findByName(digimonName: string): Promise<Digimon> {
    return this.digimonRepository.findOne({ where: { name: digimonName } });
  }

  findAll(): Promise<Digimon[]> {
    return this.digimonRepository.find();
  }

  findByLevel(digimonLevel: DigimonLevelsEnum): Promise<Digimon[]> {
    return this.digimonRepository.findBy({ level: digimonLevel });
  }

  count(): Promise<number> {
    return this.digimonRepository.count();
  }

  save(digimon): Promise<Digimon> {
    return this.digimonRepository.save(digimon);
  }
}
