import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from 'src/database/models/roles.model';
import { User } from 'src/database/models/users.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Role,
      User,
    ])
  ],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
