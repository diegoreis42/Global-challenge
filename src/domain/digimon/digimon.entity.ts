import { Column, Entity, Index, PrimaryColumn } from 'typeorm';
import { DigimonLevelsEnum } from './enums';

@Entity()
export class Digimon {
  @PrimaryColumn('varchar')
  @Index({ fulltext: true })
  name: string;

  @Column('varchar')
  img: string;

  @Column({ type: 'enum', enum: DigimonLevelsEnum })
  level: DigimonLevelsEnum;
}
