import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from 'src/app/core/models/Button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonData!: Button;
  @Output() buttonClicked = new EventEmitter;

  constructor() { }

  onClick() {
    this.buttonClicked.emit(true);
  }

}
