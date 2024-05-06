import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    standalone: true,
    imports:[CommonModule, NavbarComponent, FooterComponent],
    templateUrl: './layout.component.html',
    selector: 'app-layout'
})

export class AppLayoutComponent {

}