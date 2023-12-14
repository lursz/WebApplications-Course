import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent {
  @Input() colors: string[];
  @Output() colorChange = new EventEmitter<string>();
  selectedColor = 'biały';

  onSelect(color: string) {
    this.selectedColor = color;
    this.colorChange.emit(color);
  }

}
