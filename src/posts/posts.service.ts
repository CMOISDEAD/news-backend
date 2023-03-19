import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostType } from './interface/post.interface';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) { }

  async create(post: PostType) {
    await this.postRepository.save(post);
  }

  findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  findOne(id: number): Promise<Post> {
    return this.postRepository.findOneBy({ id });
  }

  findUserPost(user_id: number): Promise<Post[]> {
    return this.postRepository.find({
      where: {
        user_id,
      },
    });
  }

  async remove(id: number): Promise<void> {
    await this.postRepository.delete(id);
  }
}
