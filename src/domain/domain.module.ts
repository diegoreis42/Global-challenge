import { Module } from '@nestjs/common';
import { DigimonModule } from './digimon/digimon.module';

@Module({
  imports: [DigimonModule],
})
export class DomainModule {}
