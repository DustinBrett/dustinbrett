import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IPost } from '../../../server/models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  public posts: Array<IPost> = [];

  public maxPosts = 1; // TODO: Move to settings/database
  public apiUri = 'http://localhost:3010'; // TODO: Move to settings/database
  public apiPostsUri = `${ this.apiUri }/v1/posts`;

  constructor(private http: HttpClient) {
    this.requestPosts();
  }

  requestPosts(id?: Number): void {
    this.http.get(
      `${ this.apiPostsUri }/${ typeof id === 'number' ? id : '' }`
    ).subscribe((posts: Object) => {
      this.posts = <Array<IPost>>posts;
    });
  }
}
