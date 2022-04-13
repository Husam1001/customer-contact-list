import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CustomerModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // type of database
      host: 'localhost',
      port: 5432, // default port as defined in docker-compose.yml
      username: 'postgres', //default postgres username
      password: 'pass123', // default password as defined in docker-compose.yml
      database: 'postgres', // database name
      autoLoadEntities: true, //auto load all entities
      synchronize: true, //synchronize with database
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
