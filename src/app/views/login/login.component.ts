import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      :host ::ng-deep .p-password input {
        width: 15rem;
      }
    `
  ],
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}

