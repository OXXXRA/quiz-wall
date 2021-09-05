import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Quiz {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public name: string;

  @CreateDateColumn()
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  finish_at: Date;

  @Column({ nullable: true })
  public owner_id: number;

}

export default Quiz;
