import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
// import { Subscription } from 'src/entities/Subscription.entity';

@Entity({ name: 'Subscription' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'subscriptionId', unique: true, nullable: false })
  subscriptionId: number;

  @Column({ name: 'amountCents', unique: true, nullable: false })
  amountCents: number;

  @Column({ name: 'status', unique: true, nullable: false })
  status: number;

  @CreateDateColumn()
  date: Date;
  
  @CreateDateColumn()
  createdAt: Date;
}