import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Get('all')
  getAll = () => {};
  @Post('create')
  create(@Body() comment) {
    this.commentsService.create(comment);
  }
  @Delete('remove')
  remove = () => {
    this.commentsService.remove();
  };
  @Post('get-comment')
  getComment = () => {};
}
