import { HttpService } from '@nestjs/axios';
import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { catchError, lastValueFrom } from 'rxjs';
import { Digimon } from './digimon.entity';
import { DigimonRepository } from './digimon.repository';
import { AxiosError } from 'axios';

@Injectable()
export class DigimonService implements OnApplicationBootstrap {
  constructor(
    private readonly httpService: HttpService,
    private readonly digimonRepository: DigimonRepository,
  ) {}

  private readonly logger = new Logger('SeedDatabaseService');

  async onApplicationBootstrap() {
    await this.seedDatabase();
  }

  private async seedDatabase() {
    if (!(await this.digimonRepository.count())) {
      const { data } = await lastValueFrom(
        this.httpService
          .get<Digimon[]>('https://digimon-api.vercel.app/api/digimon')
          .pipe(
            catchError((error: AxiosError) => {
              this.logger.error(error.response.data);
              throw new HttpException(
                'Deu ruim na api',
                HttpStatus.INTERNAL_SERVER_ERROR,
              );
            }),
          ),
      );
      for (const digimon of data) {
        await this.digimonRepository.save(digimon);
      }
      this.logger.log('Databse preenchido!');
    }
  }
}
