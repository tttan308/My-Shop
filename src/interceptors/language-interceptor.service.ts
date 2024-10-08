/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  type CallHandler,
  type ExecutionContext,
  Injectable,
  type NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { type Observable } from 'rxjs';

import { LanguageCode } from '../constants';
import { ContextProvider } from '../providers';

@Injectable()
export class LanguageInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<undefined> {
    const request = context.switchToHttp().getRequest();
    const language: string = request.headers['x-language-code'];

    if (LanguageCode[language]) {
      ContextProvider.setLanguage(language);
    }

    return next.handle();
  }
}

export function UseLanguageInterceptor() {
  return UseInterceptors(LanguageInterceptor);
}
