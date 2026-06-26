import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
// import { Subscription } from 'src/entities/Subscription.entity';

@Entity({ name: 'Cancellation' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'subscriptionId', unique: true, nullable: false })
  subscriptionId: number;

  @Column({ name: 'rawReason', unique: true, nullable: false })
  rawReason: string;

  @Column({ name: 'reasonCategory', unique: true, nullable: false })
  reasonCategory: string;

  @Column({ name: 'risk', unique: true, nullable: false })
  risk: string;

  @Column({ name: 'band', unique: true, nullable: false })
  band: string;

  @Column({ name: 'outcome', unique: true, nullable: false })
  outcome: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;
}