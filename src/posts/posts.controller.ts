import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  /**
   * get all post saved in the database
   *
   * @returns an array with all posts
   */
  @Get('all')
  async getAll(): Promise<CreatePostDto[]> {
    const posts = await this.postService.findAll();
    return posts;
  }

  /**
   * create a posts and save it to the database
   *
   * @param post of type PostType
   * @return new posts object with a respective id
   */
  @Post('create')
  async createPost(@Body() post: CreatePostDto): Promise<CreatePostDto[]> {
    await this.postService.create(post);
    return await this.postService.findAll();
  }

  /**
   * get a post by id
   *
   * @param id of the post
   * @returns post
   */
  @Post('get-post')
  getPost(@Body() response: CreatePostDto): Promise<CreatePostDto> {
    const { id } = response;
    return this.postService.findOne(id);
  }

  /**
   * get all posts of a user
   *
   * @param user id
   * @returns array of post
   */
  @Post('get-user-posts')
  getUserPost(@Body() response: CreatePostDto): Promise<CreatePostDto[]> {
    const { user_id } = response;
    return this.postService.findUserPost(user_id);
  }

  /**
   * remove a post by id
   *
   * @param id of the post
   * @returns array of post without the removed post
   */
  @Post('remove')
  async remove(@Body() response: CreatePostDto): Promise<CreatePostDto[]> {
    const { id } = response;
    await this.postService.remove(id);
    return this.postService.findAll();
  }
}
