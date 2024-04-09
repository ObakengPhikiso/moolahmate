import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components/components.module';

@Component({
  standalone: true,
  imports: [
    RouterModule, 
    ComponentsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client-auth';
}
