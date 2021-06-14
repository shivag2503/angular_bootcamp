import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from './email';

interface EmailSummary {
  id: string;
  subject: string;
  from: string;
}

interface SendEmail {
  to: string;
  subject: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  rootUrl = 'https://api.angular-email.com';

  constructor(private http: HttpClient) { }

  getEmails() {
    return this.http.get<EmailSummary[]>(`${this.rootUrl}/emails`);
  }

  getEmail(id: string) {
    return this.http.get<Email>(`${this.rootUrl}/emails/${id}`);
  }

  sendEmail(email: Email) {
    return this.http.post<SendEmail>(`${this.rootUrl}/emails`, email);
  }
}
