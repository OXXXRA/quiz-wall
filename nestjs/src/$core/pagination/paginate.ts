import {
  Repository,
  FindConditions,
  SelectQueryBuilder,
  ObjectLiteral,
  ILike,
} from 'typeorm';
import { ServiceUnavailableException } from '@nestjs/common';
import { PaginateQuery } from './paginate-decorator';

type Column<T> = Extract<keyof T, string>;
type Order<T> = [Column<T>, 'ASC' | 'DESC'];
type SortBy<T> = Order<T>[];

export class Paginated<T> {
  data: T[];
  meta: {
    total: number;
    currentPage: number;
    totalPages: number;
  };
}

export interface PaginateConfig<T> {
  sortableColumns: Column<T>[];
  searchableColumns?: Column<T>[];
  maxLimit?: number;
  defaultSortBy?: SortBy<T>;
  defaultLimit?: number;
  where?: FindConditions<T> | FindConditions<T>[];
}

export async function paginate<T>(
  query: PaginateQuery,
  repo: Repository<T> | SelectQueryBuilder<T>,
  config: PaginateConfig<T>,
): Promise<Paginated<T>> {
  let page = query.page || 1;
  const limit = Math.min(
    query.limit || config.defaultLimit || 20,
    config.maxLimit || 100,
  );
  const sortBy = [] as SortBy<T>;

  function isEntityKey(
    sortableColumns: Column<T>[],
    column: string,
  ): column is Column<T> {
    return !!sortableColumns.find((c) => c === column);
  }

  const { sortableColumns } = config;
  if (config.sortableColumns.length < 1)
    throw new ServiceUnavailableException();

  if (query.sortBy) {
    for (const order of query.sortBy) {
      if (
        isEntityKey(sortableColumns, order[0]) &&
        ['ASC', 'DESC'].includes(order[1])
      ) {
        sortBy.push(order as Order<T>);
      }
    }
  }
  if (!sortBy.length) {
    sortBy.push(...(config.defaultSortBy || [[sortableColumns[0], 'ASC']]));
  }

  if (page < 1) page = 1;

  let [items, totalItems]: [T[], number] = [[], 0];

  let queryBuilder: SelectQueryBuilder<T>;

  if (repo instanceof Repository) {
    queryBuilder = repo
      .createQueryBuilder('e')
      .take(limit)
      .skip((page - 1) * limit);

    for (const order of sortBy) {
      queryBuilder.addOrderBy('e.' + order[0], order[1]);
    }
  } else {
    queryBuilder = repo.take(limit).skip((page - 1) * limit);

    for (const order of sortBy) {
      queryBuilder.addOrderBy(repo.alias + '.' + order[0], order[1]);
    }
  }

  if (config.where) {
    queryBuilder = queryBuilder.andWhere(config.where);
  }

  if (query.search && config.searchableColumns) {
    const search: ObjectLiteral[] = [];
    for (const column of config.searchableColumns) {
      search.push({ [column]: ILike(`%${query.search}%`) });
    }
    queryBuilder = queryBuilder.andWhere(search);
  }

  [items, totalItems] = await queryBuilder.getManyAndCount();

  let totalPages = totalItems / limit;
  if (totalItems % limit) totalPages = Math.ceil(totalPages);

  const results: Paginated<T> = {
    data: items,
    meta: {
      total: totalItems,
      currentPage: page,
      totalPages: totalPages,
    },
  };

  return Object.assign(new Paginated<T>(), results);
}
