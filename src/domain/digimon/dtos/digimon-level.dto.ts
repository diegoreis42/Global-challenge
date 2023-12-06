import { PickType } from '@nestjs/swagger';
import { DigimonDto } from './digimon.dto';

export class DigimonLevelDto extends PickType(DigimonDto, ['level'] as const) {}
