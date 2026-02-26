import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransportContainerComponent } from './components/transport-container-component/transport-container-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TransportContainerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('factory-pattern');
}
