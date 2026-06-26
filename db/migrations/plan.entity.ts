import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
// import { Plan } from 'src/entities/plan.entity';

@Entity({ name: 'plan' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', unique: true, nullable: false })
  name: string;

  @Column({ name: 'priceCents', unique: true, nullable: false })
  priceCents: number;

  @Column({ name: 'cycle', unique: true, nullable: false })
  cycle: string;
 
  @Column({ name: 'benefits', unique: true, nullable: false })
  benefits: string;

  @CreateDateColumn()
  createdAt: Date;
}