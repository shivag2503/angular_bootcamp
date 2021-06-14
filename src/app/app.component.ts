import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
signedin$: BehaviorSubject<boolean>;

  constructor(private authService: AuthService) {
    this.signedin$ = this.authService.signedin$;
  }
  ngOnInit(): void {
    this.authService.checkAuth().subscribe((res) => {console.log(res, 'ngoninit'); });
    console.log(this.authService.signedin$, 'value');
  }

}
