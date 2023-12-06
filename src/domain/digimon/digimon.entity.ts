import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Digimon {
  @PrimaryColumn('varchar')
  name: string;

  @Column('varchar')
  img: string;

  @Column('varchar')
  level: string;
}
