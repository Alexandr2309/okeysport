import { EntityState } from '@reduxjs/toolkit';

export const enum ArticleBlockType {
  TEXT = 'TEXT',
  IMAGES = 'IMAGES',
  LIST = 'LIST',
}

type ArticleBlockCommon = {
  id: string;
  type: ArticleBlockType;
};

// TEXT BLOCK
export type ArticleTextBlock = {
  title: string;
  paragraphs: string[];
  type: ArticleBlockType.TEXT;
} & ArticleBlockCommon;

// IMAGES BLOCK
export type ArticleImagesBlock = {
  images: string[];
  type: ArticleBlockType.IMAGES;
} & ArticleBlockCommon;

// LIST BLOCK
export type ArticleListBlock = {
  type: ArticleBlockType.LIST;
  list: string[];
  title: string;
  text?: string;
} & ArticleBlockCommon;

export type ArticleBlock =
  | ArticleTextBlock
  | ArticleImagesBlock
  | ArticleListBlock;

export type Article = {
  id: string;
  title: string;
  img: string;
  blocks: ArticleBlock[];
};

export interface IArticleDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: Article;
}

export interface IArticleListSchema extends EntityState<Article> {
  isLoading: boolean;
  hasMore: boolean;
  limit: number;
  error?: string;
}
