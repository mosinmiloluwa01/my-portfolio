import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  initialMode: string = localStorage.getItem('mode') ? localStorage.getItem('mode') : 'light';

  private newMode = new BehaviorSubject<string>(this.initialMode);

  currentMode = this.newMode.asObservable();

  apiBaseUrl = environment.baseUrl

  constructor(
    private http: HttpClient
  ) { }

  setCurrentMode(data: string) {
    this.newMode.next(data);
  }

  sendEmail(data) {
    return this.http.post<any>(`${this.apiBaseUrl}users/sendPortfolioMail`, data);
  }

}
