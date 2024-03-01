import { Module } from '@nestjs/common';




import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        SequelizeModule.forRoot({
          dialect: 'postgres',
          host: 'localhost',
          port: 5435,
          username: 'nest',
          password: 'nest',
          database: 'nest-backend',
          models: [],
          autoLoadModels: true,
        
        }),
        UsersModule,
      ],
})
export class AppModule { }