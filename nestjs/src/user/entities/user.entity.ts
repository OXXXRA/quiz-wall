import { Column, Entity } from 'typeorm';
import { CoreEntity } from './../../$core/entities/core.entity';

@Entity()
export class User extends CoreEntity {
  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ default: null })
  email_confirmed_at: Date;

  //  addition fields
  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  nickname: string;
}
