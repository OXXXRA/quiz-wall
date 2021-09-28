import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
  ) {}
  async create(createPostDto: CreatePostDto, user_id: string) {
    const newPost = await this.postRepository.save({
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

    return this.postRepository.find(params);
  }

  findOne(id: string) {
    return this.postRepository.findOne(id);
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const post = await this.postRepository.findOne(id);
    return this.postRepository.save({ ...post, ...updatePostDto });
  }

  async remove(id: string) {
    await this.postRepository.delete(id);
    return { message: 'success' };
  }
}
