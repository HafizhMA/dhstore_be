import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from 'src/database/models/roles.model';
import { User } from 'src/database/models/users.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      User,
      Role
    ])
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
