import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  public posts: Object = [];
  public postTruncate = 250;

  constructor(private http: HttpClient) {
    this.reqPosts();
  }

  reqPosts(id?: Number) {
    this.http.get(`http://localhost:3010/v1/posts/${ id ? id : '' }`).subscribe(resp => this.posts = resp);
  }
}
