import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public current = 'Home';
  public menu = [
    {
      name: 'Home',
      url: '/home/'
    },
    {
      name: 'Blog',
      url: '/blog/',
      submenu: [
        {
          name: 'Travel',
          url: '/travel/'
        }
      ]
    }
  ];
}
