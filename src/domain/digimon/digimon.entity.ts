import { Column, Entity } from 'typeorm';

@Entity()
export class Digimon {
  @Column()
  name: string;

  @Column()
  img: string;

  @Column()
  level: string;
}
