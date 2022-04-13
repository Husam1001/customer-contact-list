import { OneToOne } from 'typeorm';
import { Contact } from '../entities/contact.entity';

export class CreateCustomerDto {
   readonly name: string;
   readonly contact:Contact;
}
