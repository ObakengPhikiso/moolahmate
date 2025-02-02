import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ExpenseCategory } from '../schemas/categories.schems';
import { Model } from 'mongoose';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(ExpenseCategory.name) private readonly categoryModel: Model<ExpenseCategory>){}
  async create(createCategoryDto: CreateCategoryDto) {
    const res = await this.categoryModel.create(createCategoryDto);
    if(!res) throw new BadRequestException(res)
    return res  }

  async findAll() {
    const res = await this.categoryModel.find()
    if(!res) throw new BadRequestException(res)
    return res  
  }

  async findOne(id: string) {
    const res = await this.categoryModel.findById(id)
    if(!res) throw new BadRequestException(res)
    return res   
   }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const res = await this.categoryModel.findByIdAndUpdate(id, updateCategoryDto, { new: true })
    if(!res) throw new BadRequestException(res)
    return res  
  }

  async remove(id: string) {
    const res = await this.categoryModel.findByIdAndDelete(id)
    if(!res) throw new BadRequestException(res)
    return res   
  }
}
