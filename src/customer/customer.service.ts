import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from './entities/customer.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import {UpdateCustomerDto} from './dto/update-customer.dto';
import { Contact } from './entities/contact.entity';
@Injectable()
export class CustomerService {

    constructor(
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>,
        @InjectRepository(Contact)
        private readonly contactRepository: Repository<Contact>,
    ){}

 findAll(){
    return this.customerRepository.find({
        relations: ['contact'],
    });
}

 async findOne(id: string) {
     const customer = await this.customerRepository.findOne({where: {id: parseInt(id)}});
     if(!customer){
         throw new NotFoundException(`Customer # ${id} does not exist`);
     }
     return customer;
 }

 create(CreateCustomerDto: CreateCustomerDto){
    const customer = this.customerRepository.create(CreateCustomerDto); //create customer object form dto object
    return this.customerRepository.save(customer);
}
 
async update(id: string,createCustomerDto: UpdateCustomerDto){
    const customer = await this.customerRepository.preload({
        id: +id,
        ...createCustomerDto,
    });
    if(!customer){
        throw new NotFoundException(`Customer #${id} does not exist`);
    }
    return this.customerRepository.save(customer);
}
 
async remove(id: string){
    const customer = await this.findOne(id);
    return this.customerRepository.remove(customer);
}

}
