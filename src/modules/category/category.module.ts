import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from 'src/database/models/categories.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Category
    ])
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
