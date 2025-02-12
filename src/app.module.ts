import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

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
  })

],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
