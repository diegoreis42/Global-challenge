import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { DigimonLevelsEnum } from '../enums';

export class DigimonDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  img: string;

  @IsNotEmpty()
  @IsEnum(DigimonLevelsEnum)
  level: DigimonLevelsEnum;
}
