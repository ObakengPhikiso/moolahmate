import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    imports: [RouterOutlet],
    standalone: true,
    templateUrl: './auth.component.html',
    selector: 'app-auth'
})

export class AuthComponent {}