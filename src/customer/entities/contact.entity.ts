import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from './customer.entity';
@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  email: string;
  @Column({ nullable: true })
  phone: string;
  @Column({ nullable: true })
  mobile: string;

  @OneToOne(() => Customer, (customer) => customer.contact, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  customer: Customer;
}
