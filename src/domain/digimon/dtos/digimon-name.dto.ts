import { PickType } from '@nestjs/mapped-types';
import { DigimonDto } from './digimon.dto';

export class DigimonNameDto extends PickType(DigimonDto, ['name']) {}
