import { Column, Entity } from 'typeorm';
import { CoreEntity } from '../../$core/entities/core.entity';

@Entity()
export class Post extends CoreEntity {
  @Column()
  name: string;

  @Column()
  content: string;

  @Column()
  owner_id: string;
}
