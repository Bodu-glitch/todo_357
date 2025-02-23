import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MaterialModule} from './shared/modules/material.module';
import {SidebarComponent} from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'donezo_frontend';
}
