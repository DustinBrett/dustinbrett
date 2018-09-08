import * as fs from 'fs';
import { parseString } from 'xml2js';

import Post, { IPost } from './../../models/post';
import { logError } from '../error';

const dataPath = './data';

interface ChannelItem {
  title: Array<string>;
  'wp:post_date': Array<string>;
  'content:encoded': Array<string>;
}

interface RssChannel {
  item: Array<ChannelItem>;
}

interface RssChannels {
  rss: {
    channel: Array<RssChannel>
  };
}

export const migratePosts = (): void => {
  fs.readdirSync(dataPath).forEach(file => {
    if (file.includes('.wordpress.') && file.endsWith('.xml')) {
      fs.readFile(`${ dataPath }/${ file }`, (readError: Error, fileData: Buffer) => {
        parseString(fileData, (parseError: Error, data: RssChannels) => {
          if (
            data &&
            data.rss &&
            data.rss.channel &&
            data.rss.channel.length > 0 &&
            typeof data.rss.channel[0].item === 'object'
          ) {
            data.rss.channel[0].item.forEach((item: ChannelItem, id: number) => {
              const newPost: IPost = {
                id,
                body: item['content:encoded'][0],
                posted: (new Date(item['wp:post_date'][0]).getTime()),
                title: item.title[0]
              };

              (new Post(newPost)).save((postError: Error) => logError(postError));
            });
          }
        });
     });
    }
  });
};
