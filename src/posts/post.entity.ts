import { User } from 'src/users/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  CreateDateColumn,
} from 'typeorm';
// import { CommentType } from './interface/comment.interface';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => User, (user) => user.id)
  @Column()
  user_id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  url: string;

  @Column('int', { array: true, default: [] })
  comments: number[];

  @CreateDateColumn()
  created_at: Date;
}
