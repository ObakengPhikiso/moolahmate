import { CommonModule } from '@angular/common';
import {  Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports:[CommonModule]
})
export class NavbarComponent   {
  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef!: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef!: ElementRef;
  

  
 showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

}
