import { migratePosts } from './posts';

export const migrateDb = (init: boolean): void => {
  if (init) {
    migratePosts();
  }
};
