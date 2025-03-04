import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {RouterOutlet} from '@angular/router'
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

}
