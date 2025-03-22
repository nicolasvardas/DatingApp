import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  standalone: true,
  imports: [],
  templateUrl: './test-errors.component.html',
  styleUrl: './test-errors.component.css'
})
export class TestErrorsComponent {
  baseUrl = 'https:// localhost:5001/api/';
  private http = inject(HttpClient);

  get400Error(){
    this.http.get(this.baseUrl + '');
  }
}
