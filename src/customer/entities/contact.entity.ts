import { Column, Entity,JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './customer.entity';
@Entity()
export class Contact{

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    email: string;
    @Column()
    phone: string;
    @Column()
    mobile: string;

    @OneToOne(() => Customer,customer=>customer.contact,{ onDelete: 'CASCADE' })
    @JoinColumn({ name: "user_id" })
    customer: Customer;

}
