import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
// import { Subscription } from 'src/entities/Subscription.entity';

@Entity({ name: 'Subscription' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'subscriptionId', unique: true, nullable: false })
  subscriptionId: number;

  @Column({ name: 'type', unique: true, nullable: false })
  type: string;
  
  @CreateDateColumn()
  occurredAt: Date;
 
  @CreateDateColumn()
  createdAt: Date;

}