import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthUser } from '../$core/decorators/auth-user.decorator';
import { AuthGuard } from '../$core/guards/jwt.guard';
import { OptionalUserGuard } from '../$core/guards/optional-user.guard';
import { Paginate } from '../$core/pagination/paginate-decorator';
import { IAuthUser } from '../$core/types/AuthUser';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostService } from './post.service';
import { PaginateQuery } from './../$core/pagination/paginate-decorator';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) { }

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createPostDto: CreatePostDto, @AuthUser() user: IAuthUser) {
    return this.postService.create(createPostDto, user.id);
  }

  @Get()
  public findAll(@Paginate() query: PaginateQuery) {
    return this.postService.findAll(query);
  }

  @Get(':id')
  @UseGuards(OptionalUserGuard)
  findOne(@Param('id') id: string, @AuthUser() user: IAuthUser) {
    console.log('user: ', user);
    return this.postService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(id, updatePostDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(id);
  }
}
