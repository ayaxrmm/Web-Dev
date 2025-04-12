import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CompanyListComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'hh_front';
}
