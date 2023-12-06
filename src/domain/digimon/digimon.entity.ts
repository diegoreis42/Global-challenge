import { Column, Entity, PrimaryColumn } from 'typeorm';
import { DigimonLevelsEnum } from './enums';

@Entity()
export class Digimon {
  @PrimaryColumn('varchar')
  name: string;

  @Column('varchar')
  img: string;

  @Column({ type: 'enum', enum: DigimonLevelsEnum })
  level: DigimonLevelsEnum;
}
