import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contact.entity";

@Entity() //sql table name 'customer'
export class Customer{
    @PrimaryGeneratedColumn() // generated primary key with auto increment
   
    id: number;
    @Column()
    name: string;
    @OneToOne(() => Contact, contact => contact.customer,{ eager: true,
        cascade: true})
    contact: Contact;

}