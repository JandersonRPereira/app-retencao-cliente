import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
// import { Subscription } from 'src/entities/Subscription.entity';

@Entity({ name: 'MetricsResponse' })
export class Product {
  
  @Column({ name: 'totalCancellations', unique: true, nullable: false })
  totalCancellations: number;

  @Column({ name: 'automaticCancellations', unique: true, nullable: false })
  automaticCancellations: number;

  @Column({ name: 'humanRetentions', unique: true, nullable: false })
  humanRetentions: number;

  @Column({ name: 'avoidedCostCents', unique: true, nullable: false })
  avoidedCostCents: number;

  @Column({ name: 'retentionRate', unique: true, nullable: false })
  retentionRate: number;

  @Column({ name: 'riskDistribution', unique: true, nullable: false })
  riskDistribution: string;

}