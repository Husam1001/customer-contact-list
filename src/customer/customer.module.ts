import { Module, Controller } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Contact } from './entities/contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, Contact])], // register customer entity
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
