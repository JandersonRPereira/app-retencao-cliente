import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
// import { Subscription } from 'src/entities/Subscription.entity';

@Entity({ name: 'Subscription' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'planId', unique: true, nullable: false })
  planId: number;

  @CreateDateColumn()
  startedAt: Date;

  @Column({ name: 'status', unique: true, nullable: false })
  status: string;
  
  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;
}