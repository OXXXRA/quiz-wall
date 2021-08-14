import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public login: string;

  @Column()
  public email: string;

  @Column()
  public password: string;
}
export default User;


@Entity()
class Post {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public name: string;

  @Column()
  public body: string;

}

@Entity()
class Quiz {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public settings: string;

  @Column()
  public name: string;

  @Column()
  public variants: string;
}