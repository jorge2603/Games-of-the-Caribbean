import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'Games-of-the-Caribbean';


  toggleTheme() {
    const element = document.body;
    element.dataset['bsTheme'] = element.dataset['bsTheme'] === 'dark' ? 'light' : 'dark';
  }
}



