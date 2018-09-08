import { migratePosts } from './wordpress';

export const migrateDb = (init: boolean): void => {
  if (init) {
    migratePosts();
  }
};
