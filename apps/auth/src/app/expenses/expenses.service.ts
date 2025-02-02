import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Expense } from '../schemas/expenses.schema';

@Injectable()
export class ExpensesService {
  constructor(@InjectModel(Expense.name) private readonly expenseModel: Model<Expense>){}

  async create(createExpenseDto: CreateExpenseDto) {
    const res = await this.expenseModel.create(createExpenseDto);
    if(!res) throw new BadRequestException(res)
    return res
  }

  async findAll() {
    const res = await this.expenseModel.find()
    if(!res) throw new BadRequestException(res)
    return res
  }

 async findOne(id: string) {
    const res = await this.expenseModel.findById(id)
    if(!res) throw new BadRequestException(res)
    return res  
  }

  async update(id: string, updateExpenseDto: UpdateExpenseDto) {
    const res = await this.expenseModel.findByIdAndUpdate(id, updateExpenseDto, { new: true })
    if(!res) throw new BadRequestException(res)
    return res
  }

  async remove(id: string) {
    const res = await this.expenseModel.findByIdAndDelete(id)
    if(!res) throw new BadRequestException(res)
    return res 
   }
}
