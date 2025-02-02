import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {initFlowbite} from 'flowbite'
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();  }
}
