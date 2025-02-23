import {Component, signal, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MaterialModule} from './shared/modules/material.module';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {SearchComponent} from './components/search/search.component';
import {MatDrawer} from '@angular/material/sidenav';
import {NotificationsComponent} from './components/notifications/notifications.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, SidebarComponent, SearchComponent, NotificationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'donezo_frontend';

  @ViewChild('drawer') drawer!: MatDrawer;
  @ViewChild('drawerNoti') drawerNoti!: MatDrawer;

  constructor() {}

  toggleDrawer(drawerName: string) {
    if (drawerName === 'Search') {
      if (this.drawerNoti.opened) {
        this.drawerNoti.toggle()
      }
      this.drawer.toggle();
    }else {
      if (this.drawer.opened){
        this.drawer.toggle()
      }
      this.drawerNoti.toggle()
    }
  }
}
