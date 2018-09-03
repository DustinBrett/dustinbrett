import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public testJSON = 'Loading...';

  public navMenu = [
    {
      name: 'Home',
      url: '/home/'
    },
    {
      name: 'Blog',
      url: '/blog/'
    }
  ];

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3010/v1/static/test.json').subscribe(data => {
      this.testJSON = JSON.stringify(data);
    });
  }
}
