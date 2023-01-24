import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso-angular';

  userName = 'Carlos';
  userData = {
    email: 'carlos@email.com',
    role: 'Admin'

  }
}
