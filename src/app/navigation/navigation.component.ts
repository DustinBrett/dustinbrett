import { Component } from '@angular/core';

import { menu, menuDefault } from '../../data';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public current = menuDefault;
  public menu = menu;
}
