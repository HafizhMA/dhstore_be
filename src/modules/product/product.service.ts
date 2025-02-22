import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from 'src/database/models/product.model';
import { v4 as uuidv4 } from 'uuid';
import { ProductAdditional } from 'src/database/models/product_additional.model';
import { Op } from 'sequelize';

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
      categoryId: payload.categoryId,
      active: payload.active,
      isAdditional: payload.isAdditional,
    })

    let additionals: any = [];
    if (payload.variants !== undefined) {
      for (const variant of payload.variants) {
        const additional = await this.productAdditionalModel.create({
          id: uuidv4(),
          name: variant.name,
          qty: variant.qty,
          productId: data.id,
          price: variant.price
        })
        
        additionals.push(additional)
      }
    }

    return {...data.toJSON(), additionals};
  }

  async findAll() {
    const data = await this.productModel.findAll({
      include: [{
        model: ProductAdditional
      }]
    })

    return data;
  }

  async findOne(id: string) {
    const data = await this.productModel.findOne({
      where: {id},
      include: [{
        model: ProductAdditional,
      }]
    })

    if(!data) {
      throw new NotFoundException('not found product')
    }

    return data;
  }

  async update(id: string, payload: UpdateProductDto) {
    const previousData = await this.findOne(id);

    let newData: any = {}
 
    if(payload.name !== undefined) {
      newData.name = payload.name
    }

    if(payload.price !== undefined) {
      newData.price = payload.price
    }

    if(payload.qty !== undefined) {
      newData.qty = payload.qty
    }

    if(payload.active !== undefined) {
      newData.active = payload.active
    }

    if(payload.isAdditional !== undefined) {
      newData.isAdditional = payload.isAdditional
    }

    if(payload.variants !== undefined) {
      const variants = payload.variants.map(v => {
        return {
          id: v.id,
          productId: previousData.id,
          name: v.name,
          qty: v.qty,
          price: v.price,
        }
      })

      const variantIds: string[] = []

      for (const variant of variants) {
        if (variant.id) {
          const findVariant = await this.productAdditionalModel.findOne({
            where: {
              id: variant.id,
              productId: previousData.id
            }
          })

          const findExactVariant = await this.productAdditionalModel.findOne({
            where: {
              name: variant.name,
              id: { [Op.ne]: variantIds }
            }
          })

          if ( findExactVariant) {
            throw new BadRequestException('there is same name variant')
          }

          const exactNameVariant = await this.productAdditionalModel.findOne({
            where: {
              name: { [Op.like]: `%${variant.name}%`},
              id: { [Op.ne]: variantIds}
            }
          })

          if(exactNameVariant) {
            const destroyVariantExactName = await exactNameVariant.destroy()
          }

          const updateVariant = await this.productAdditionalModel.update({
            name: variant.name,
            qty: variant.qty,
            price: variant.price
          }, {
            where: {
              id: variant.id
            }
          })

          variantIds.push(variant.id)
      } else {
        const createVariant = await this.productAdditionalModel.create({
          id: uuidv4(),
          productId: variant.productId,
          name: variant.id,
          qty: variant.qty
        })
        variantIds.push(variant.id)
      }

      const destroyVariant = await this.productAdditionalModel.destroy({
        where: {
          id: { [Op.notIn]: variantIds }
        }
      })
    }
  }

    await previousData.update(newData)
    const updatedProduct = await this.findOne(id)
    return updatedProduct;
  }

  async remove(id: string) {
    await this.productModel.destroy({
      where: {id}
    })

    return `data has been deleted`;
  }
}
