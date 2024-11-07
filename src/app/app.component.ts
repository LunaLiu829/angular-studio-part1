import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CrewComponent } from './crew/crew.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ExperimentsComponent } from './experiments/experiments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CrewComponent,
    EquipmentComponent,
    ExperimentsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-studio-part1';
}
