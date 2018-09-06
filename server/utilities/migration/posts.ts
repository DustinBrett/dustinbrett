import Post, { IPost } from '../../models/post';
import { posts } from '../../../src/data';
import { logError } from '../../utilities/error';

export const migratePosts = (): void => {
  posts.forEach((post: IPost, id: number) => {
    (new Post({ id, ...post })).save((err: Error) => logError(err));
  });
};
