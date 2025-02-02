import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { LoaderComponent } from "@moolahmate/ui-components";
import { SidenavComponent } from "../sidenav/sidenav.component";
import {initFlowbite} from 'flowbite'
import { RouterOutlet } from "@angular/router";

@Component({
    standalone: true,
    imports:[CommonModule,RouterOutlet, NavbarComponent, FooterComponent,LoaderComponent, SidenavComponent],
    templateUrl: './layout.component.html',
    selector: 'app-layout'
})

export class AppLayoutComponent implements OnInit {
    loaded = true;

    ngOnInit(): void {
      initFlowbite();  
    }
 
}