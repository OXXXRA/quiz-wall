import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export default class PostsSearchService {
  index = 'posts'

  constructor(
    private readonly elasticsearchService: ElasticsearchService
  ) { }

  async indexPost(post: any) {
    return this.elasticsearchService.index<any, any>({
      index: this.index,
      body: {
        id: post.id,
        name: post.name,
        body: post.body,
        owner_id: post.owner_id
      }
    })
  }

  async search(text: string) {
    const { body } = await this.elasticsearchService.search<any>({
      index: this.index,
      body: {
        query: {
          multi_match: {
            query: text,
            fields: ['body', 'name']
          }
        }
      }
    })
    const hits = body.hits.hits;
    return hits.map((item: any) => item._source);
  }
}