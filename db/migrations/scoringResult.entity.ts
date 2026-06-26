import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
// import { Subscription } from 'src/entities/Subscription.entity';

@Entity({ name: 'ScoringResult' })
export class Product {
  
  @Column({ name: 'risk', unique: true, nullable: false })
  risk: number;

  @Column({ name: 'rationale', unique: true, nullable: false })
  rationale: string;

  @Column({ name: 'latencyMs', unique: true, nullable: false })
  latencyMs: number;
  
  @CreateDateColumn({name: 'timedOut'})
  timedOut: boolean;

}