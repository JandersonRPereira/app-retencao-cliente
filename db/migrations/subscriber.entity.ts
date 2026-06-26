import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
// import { Subscriber } from 'src/entities/subscriber.entity';

@Entity({ name: 'subscriber' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', unique: true, nullable: false })
  name: string;

  @Column({ name: 'email', unique: true, nullable: false })
  priceCents: string;

  @CreateDateColumn()
  createdAt: Date;
}