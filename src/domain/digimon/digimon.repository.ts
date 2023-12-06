import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Digimon } from './digimon.entity';
import { Repository } from 'typeorm';

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

  findByLevel(digimonLevel: string): Promise<Digimon[]> {
    return this.digimonRepository.findBy({ level: digimonLevel });
  }
}
