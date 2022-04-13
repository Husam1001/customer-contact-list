import { Contact } from '../entities/contact.entity';
export class UpdateCustomerDto {
    readonly name?: string;
    readonly contact?:Contact;
}
