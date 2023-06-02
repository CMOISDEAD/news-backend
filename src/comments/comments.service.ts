import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment) private commentRepository: Repository<Comment>,
  ) {}

  async create(comment) {
    this.commentRepository.save(comment);
  }

  findAll() {
    return this.commentRepository.find();
  }

  findOne(id: number) {
    return this.commentRepository.findOneBy({ id });
  }

  findUserPost(user_id: number) {
    return this.commentRepository.find({
      where: {
        user_id,
      },
    });
  }

  async remove(id: number) {
    await this.commentRepository.delete(id);
  }
}
