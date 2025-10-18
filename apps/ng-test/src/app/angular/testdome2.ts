import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  standalone: true,
  template: `<p>{{ amount | number:'3.2-5' }}</p>`
})
export class DecimalComponent {
  @Input() amount: number | undefined = 2.175;
}
