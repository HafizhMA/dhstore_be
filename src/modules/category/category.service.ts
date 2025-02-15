import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from 'src/database/models/categories.model';
import { v4 as uuidv4 } from 'uuid';
import { where } from 'sequelize';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category) private readonly categoryModel: typeof Category
  ){}
  
  async create(payload: CreateCategoryDto) {
    const data = await this.categoryModel.create({
      id: uuidv4(),
      name: payload.name,
    })

    return data;
  }

  async findAll() {
    const data = await this.categoryModel.findAll();
    
    return data;
  }

  async findOne(id: string) {
    const data = await this.categoryModel.findOne({
      where: {id}
    })

    if (!data) {
      throw new NotFoundException('not found category')
    }

    return data;
  }

  async update(id: string, payload: UpdateCategoryDto) {
    const existingData = await this.findOne(id)

    const newData: any = {}

    if (payload.name !== undefined) {
      newData.name = payload.name
    }

    const updatedData = await existingData.update(newData)

    return updatedData;
  }

  async remove(id: string) {
    await this.categoryModel.destroy({
      where: {id}
    })
    return `data has been deleted`;
  }
}
