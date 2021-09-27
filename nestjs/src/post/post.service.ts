import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly post: Repository<Post>,
  ) {}
  async create(createPostDto: CreatePostDto, user_id: string) {
    const newPost = await this.post.save({
      ...createPostDto,
      owner_id: user_id,
    });

    return newPost;
  }

  findAll(user_id?: string) {
    const params = {};

    if (user_id) {
      params['owner_id'] = user_id;
    }

    return this.post.find(params);
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
