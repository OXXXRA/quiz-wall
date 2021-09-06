import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query
} from '@nestjs/common';
import CreatePostDto from './dto/createPost.dto';
import UpdatePostDto from './dto/updatePost.dto';
import PostsService from './posts.service';

@Controller('posts')
export default class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @Get()
  getAllPosts(@Query('search') search: string) {

    if (search) {
      return this.postsService.searchForPosts(search);
    }
    return this.postsService.getAllRecords();
  }

  @Get(':id')
  getPostById(@Param('id') id: number) {
    return this.postsService.getPostById(id);
  }

  @Post()
  async createPost(@Body() post: CreatePostDto) {
    return this.postsService.createPost(post);
  }

  @Patch(':id')
  async updatePost(@Param('id') id: string, @Body() post: UpdatePostDto) {
    return this.postsService.updatePost(Number(id), post);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    return this.postsService.deletePost(Number(id));
  }
}
