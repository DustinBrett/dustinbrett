import { Component } from '@angular/core';

import { posts } from '../../data';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  public posts = posts;
}
