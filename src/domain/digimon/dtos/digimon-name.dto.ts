import { PickType } from '@nestjs/swagger';
import { DigimonDto } from './digimon.dto';

export class DigimonNameDto extends PickType(DigimonDto, ['name'] as const) {}
