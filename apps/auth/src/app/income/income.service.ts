import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateIncomeDto } from './dto/create-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';
import { Income } from '../schemas/income.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class IncomeService {
  constructor(@InjectModel(Income.name) private readonly incomeModel: Model<Income>){}

  async create(createIncomeDto: CreateIncomeDto) {
    const res = await this.incomeModel.create(createIncomeDto);
    if(!res) throw new BadRequestException(res)
    return res
  }

  async findAll() {
    const res = await this.incomeModel.find()
    if(!res) throw new BadRequestException(res)
    return res
  }

 async findOne(id: string) {
    const res = await this.incomeModel.findById(id)
    if(!res) throw new BadRequestException(res)
    return res  
  }

  async update(id: string, updateIncomeDto: UpdateIncomeDto) {
    const res = await this.incomeModel.findByIdAndUpdate(id, updateIncomeDto, { new: true })
    if(!res) throw new BadRequestException(res)
    return res
  }

  async remove(id: string) {
    const res = await this.incomeModel.findByIdAndDelete(id)
    if(!res) throw new BadRequestException(res)
    return res 
   }
}
