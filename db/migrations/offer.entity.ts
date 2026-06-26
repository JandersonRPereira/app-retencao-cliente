import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
// import { Subscription } from 'src/entities/Subscription.entity';

@Entity({ name: 'Offer' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'cancellationId', unique: true, nullable: false })
  cancellationId: number;

  @Column({ name: 'type', unique: true, nullable: false })
  type: string;

  @Column({ name: 'amountCents', unique: true, nullable: false })
  amountCents: number;

  @Column({ name: 'status', unique: true, nullable: false })
  status: string;
  
  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;
}