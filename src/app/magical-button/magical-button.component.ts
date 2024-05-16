import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-magical-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './magical-button.component.html',
  styleUrl: './magical-button.component.scss',
})
export class MagicalButtonComponent {
  @Output() eventEmitter: EventEmitter<number> = new EventEmitter();
  @Input() content?: string;
  @Input() color?: string;
  clicked: number = 0;

  onClick() {
    this.clicked++;
    this.eventEmitter.emit(this.clicked);
  }
}
