import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userProfileModel: Model<User>){}
  async create(createUserDto: CreateUserDto) {
    const res = await this.userProfileModel.create(createUserDto);
    if(!res) throw new BadRequestException(res)
    return res  }

  async findAll() {
    const res = await this.userProfileModel.find()
    if(!res) throw new BadRequestException(res)
    return res
  }

 async findOne(id: string) {
    const res = await this.userProfileModel.findById(id)
    if(!res) throw new BadRequestException(res)
    return res  
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const res = await this.userProfileModel.findByIdAndUpdate(id, updateUserDto, { new: true })
    if(!res) throw new BadRequestException(res)
    return res
  }

  async remove(id: string) {
    const res = await this.userProfileModel.findByIdAndDelete(id)
    if(!res) throw new BadRequestException(res)
    return res 
   }
}
