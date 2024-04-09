import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    standalone: true,
    imports:[CommonModule, NavbarComponent],
    templateUrl: './layout.component.html',
    selector: 'app-layout'
})

export class AppLayoutComponent {

}