import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { CreateAnalyticsDto } from './dto/create-analytics.dto';
import { UpdateAnalyticsDto } from './dto/update-analytics.dto';
import {ApiTags} from '@nestjs/swagger'

@Controller('analytics')
@ApiTags('Analytics')
export class AnalyticsController {
  constructor(private readonly expensesService: AnalyticsService) {}

  @Post()
  create(@Body() createExpenseDto: CreateAnalyticsDto) {
    return this.expensesService.create(createExpenseDto);
  }

  @Get()
  findAll() {
    return this.expensesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expensesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExpenseDto: UpdateAnalyticsDto) {
    return this.expensesService.update(+id, updateExpenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.expensesService.remove(+id);
  }
}
