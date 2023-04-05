import { Component } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'microservice-blockchain-client';

  constructor(private router: Router) { }

  ngOnInit(): void {
    //this.router.navigate(['/customers']);
    this.router.navigate(['/customers']);

  }
}