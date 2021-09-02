import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Test {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public start_date: Date;

  @Column()
  public comment: string;

  @Column()
  public text: string;

  @Column()
  public parent_id: number;

  @Column()
  public created_at: Date;

  @Column()
  public owner_id: number;

  @Column()
  public likes: number;
}

export default Test;