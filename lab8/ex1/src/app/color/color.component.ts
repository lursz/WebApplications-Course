import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent {
  color: string = '';
  @Input() colors: string[] = [];
  @Output() colorSelected = new EventEmitter<string>();

  onColorChange(color: string) {
    this.colorSelected.emit(color);
  }

}
