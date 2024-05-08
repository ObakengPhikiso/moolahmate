import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { DataService } from "@moolahmate/utils";
import { LoaderComponent } from "@moolahmate/ui-components";

@Component({
    standalone: true,
    imports:[CommonModule, NavbarComponent, FooterComponent,LoaderComponent],
    templateUrl: './layout.component.html',
    selector: 'app-layout'
})

export class AppLayoutComponent implements OnInit {
    loaded: boolean = false;
    constructor(private dataService: DataService){}
    ngOnInit(): void {
        this.dataService.getData().subscribe(() => this.loaded = true);
    }

}