import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent {
  @Input() tag
  @Input() movement
}
