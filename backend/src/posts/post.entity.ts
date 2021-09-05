import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Post {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public name: string;

  @Column()
  public body: string;

  @Column({ default: 0 })
  public likes: number;

  @CreateDateColumn()
  created_at: Date;

  @Column({ default: null, nullable: true })
  public owner_id: number;

}

export default Post;
