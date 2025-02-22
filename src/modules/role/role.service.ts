import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from 'src/database/models/roles.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role) private readonly roleModel: typeof Role
  ) {}
  async create(payload: CreateRoleDto) {
    const data = await this.roleModel.create({
      id: uuidv4(),
      role: payload.role
    })

    return data;
  }

  async findAll() {
    const data = await this.roleModel.findAll()
    
    if(!data) {
      throw new NotFoundException('not found roles')
    }

    return data;
  }

  async findOne(id: string) {
    const data = await this.roleModel.findOne({
      where: {
        id
      }
    })

    if (!data) {
      throw new NotFoundException('not found role')
    }

    return data ;
  }

  async update(id: string, payload: UpdateRoleDto) {
    const previousData = await this.findOne(id)

    let newData: any = {}
    if (payload.role !== undefined) {
      newData.role = payload.role
    }

    await previousData.update(newData)

    return previousData;
  }

  async remove(id: string) {
    await this.roleModel.destroy({
      where: {
        id
      }
    })

    return `data success deleted`;
  }
}
