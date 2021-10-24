import { Injectable } from '@nestjs/common';
import { UseAspect, Advice } from 'ts-aspect'
import { LoggingAspect } from './aspects/logging.aspect'

@Injectable()
export class AppService {

  @UseAspect(Advice.Around, LoggingAspect)
  getHello(): string {
    return 'Hello World!';
  }
}
