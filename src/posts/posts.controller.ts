import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) { }

  @Post('create')
  async createPost(@Body() post: CreatePostDto): Promise<CreatePostDto[]> {
    await this.postService.create(post);
    return await this.postService.findAll();
  }

  @Post('get-post')
  getPost(@Body() post: CreatePostDto): Promise<CreatePostDto> {
    return this.postService.findOne(post.id);
  }

  @Post('get-user-posts')
  getUserPost(@Body() post: CreatePostDto): Promise<CreatePostDto[]> {
    return this.postService.findUserPost(post.user_id);
  }

  @Post('remove')
  async remove(@Body() post: CreatePostDto): Promise<CreatePostDto[]> {
    await this.postService.remove(post.id);
    return this.postService.findAll();
  }

  @Get('all')
  async getAll(): Promise<CreatePostDto[]> {
    const posts = await this.postService.findAll();
    return posts;
  }
}
