import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from './loader.service';
@Component({
  selector: 'lib-loader',
  standalone: true,
  imports: [CommonModule],
  providers: [LoaderService],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  constructor(public loader: LoaderService) { }

}
