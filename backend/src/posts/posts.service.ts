import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, In, Repository } from 'typeorm';
import Post from './post.entity';
import PostsSearchService from "./postsSearch.service";
import Quiz from "./quiz.entity";
@Injectable()
export default class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    private postsSearchService: PostsSearchService,
    @InjectRepository(Quiz) private quizRepository: Repository<Quiz>,
  ) { }

  async getAllRecords() {


    const result = await getConnection()
      .createQueryBuilder()
      .select("quiz")
      .from(Quiz, "quiz")
      .getMany();
    return result
  }

  async searchForPosts(text: string) {
    const results = await this.postsSearchService.search(text);
    const ids = results.map((result: any) => result.id);
    if (!ids.length) {
      return [];
    }
    return this.postsRepository
      .find({
        where: { id: In(ids) }
      });
  }


  getAllPosts() {
    return this.postsRepository.find();
  }

  async getPostById(id: number) {
    const post = await this.postsRepository.findOne(id);

    if (post) return post

    throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
  }

  async createPost(post: any) {
    console.log(post);

    const newPost = await this.quizRepository.create(post);

    await this.quizRepository.save(newPost);

    return newPost;
  }

  async updatePost(id: number, post: any) {
    await this.postsRepository.update(id, post);

    const updatedPost = await this.postsRepository.findOne(id);

    if (updatedPost) return updatedPost

    throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
  }

  async deletePost(id: number) {
    const deleteResponse = await this.postsRepository.delete(id);

    if (!deleteResponse.affected) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
  }
}
