import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from 'src/database/models/product.model';
import { v4 as uuidv4 } from 'uuid';
import { ProductAdditional } from 'src/database/models/product_additional.model';

@Injectable()
export class ProductService {
  constructor (
    @InjectModel(Product) private readonly productModel: typeof Product,
    @InjectModel(ProductAdditional) private readonly productAdditionalModel: typeof ProductAdditional,
  ){}
  async create(payload: CreateProductDto) {
    const data = await this.productModel.create({

      id: uuidv4(),
      name: payload.name,
      price: payload.price,
      qty: payload.qty,
      active: payload.active,
      isAdditional: payload.isAdditional
    })

    let additionals: any = [];
    if (payload.variants !== undefined) {
      for (const variant of payload.variants) {
        const additional = await this.productAdditionalModel.create({
          id: uuidv4(),
          name: variant.name,
          qty: variant.qty,
        })
        additionals.push(additional)
      }
    }

    return {...data.toJSON, additionals};
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
