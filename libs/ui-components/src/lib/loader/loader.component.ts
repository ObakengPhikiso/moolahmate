import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoaderService} from '@moolahmate/utils'
@Component({
  selector: 'lib-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  constructor(public loader: LoaderService) { }

}
