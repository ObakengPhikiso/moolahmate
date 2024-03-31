import { Controller, Get, UseGuards } from '@nestjs/common';

import { AppService } from './app.service';
import JwtAuthenticationGuard from './auth/jwt/jwt.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(JwtAuthenticationGuard)
  getData() {
    return this.appService.getData();
  }
}
