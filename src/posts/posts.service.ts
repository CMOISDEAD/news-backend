import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostType } from './interface/post.interface';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  /**
   * add a post to the database
   * @param post to save
   */
  async create(post: PostType) {
    await this.postRepository.save(post);
  }

  /**
   * get all posts
   *
   * @return array of posts
   */
  findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  /**
   * find a post by id
   *
   * @param id of a post
   * @return post with that id
   */
  findOne(id: number): Promise<Post> {
    return this.postRepository.findOneBy({ id });
  }

  /**
   * find all post of a user
   *
   *  @param user id
   *  @return array of post of that user
   */
  findUserPost(user_id: number): Promise<Post[]> {
    return this.postRepository.find({
      where: {
        user_id,
      },
    });
  }

  async remove(id: number) {
    await this.postRepository.delete(id);
  }
}
