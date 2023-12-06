import { PickType } from '@nestjs/mapped-types';
import { DigimonDto } from './digimon.dto';

export class DigimonLevelDto extends PickType(DigimonDto, ['level']) {}
