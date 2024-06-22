import { Component, OnInit } from '@angular/core';
import { JWTTokenService } from './authenticate/services/jwttoken.service';
import { UserService } from './authenticate/services/user.service';
import { EventbusService } from './shared/services/eventbus.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'YourI';
  eventBusSub?: Subscription;

  constructor(
    private userService: UserService,
    private eventBusService: EventbusService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // ...

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
      this.router.navigate(['/login'])
    });
  }

  logout(): void {
    this.userService.logout();
  }
}
