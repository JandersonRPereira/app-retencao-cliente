import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
// import { Subscription } from 'src/entities/Subscription.entity';

@Entity({ name: 'Cancellation' })
export class Product {

  @Column({ name: 'type', unique: true, nullable: false })
  type: number;

  @Column({ name: 'offer', unique: true, nullable: false })
  offer: string;

  @Column({ name: 'humanReason', unique: true, nullable: false })
  humanReason: string;
  
}