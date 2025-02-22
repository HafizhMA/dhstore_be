import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/category/category.module';
import { RoleModule } from './modules/role/role.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
  }),
  SequelizeModule.forRootAsync({
    useFactory: (configService: ConfigService) => ({
      dialect: 'postgres', 
      host: configService.get<string>('DB_HOST'),
      port: configService.get<number>('DB_PORT'),
      username: configService.get<string>('DB_USERNAME'),
      password: configService.get<string>('DB_PASSWORD'),
      database: configService.get<string>('DB_NAME'),
      autoLoadModels: true, // models loaded automatically
      synchronize: false,
    }),
    inject: [ConfigService]
  }),
  ProductModule,
  CategoryModule,
  RoleModule,
  UserModule

],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
