import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from 'src/database/models/product.model';
import { ProductAdditional } from 'src/database/models/product_additional.model';
import { ProductReview } from 'src/database/models/product_reviews.model';
import { Category } from 'src/database/models/categories.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Product,
      ProductAdditional,
      ProductReview,
      Category
    ])
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
