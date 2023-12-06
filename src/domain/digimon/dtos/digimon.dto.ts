import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { DigimonLevelsEnum } from '../enums';
import { ApiProperty } from '@nestjs/swagger';

export class DigimonDto {
  @ApiProperty({type: String, description: 'Nome do digimon'})
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({type: String, description: 'url da imagem do digimon'})
  @IsString()
  @IsNotEmpty()
  img: string;

  @ApiProperty({enum: DigimonLevelsEnum, isArray: false, example: DigimonLevelsEnum.CHAMPION})
  @IsNotEmpty()
  @IsEnum(DigimonLevelsEnum)
  level: DigimonLevelsEnum;
}
