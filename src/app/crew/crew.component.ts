import { Component } from '@angular/core';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.css',
})
export class CrewComponent {
  crew: string[] = ['Jessica Watkins', 'Raja Chari', 'Jasmin Moghbeli'];
  constructor() {}
}
