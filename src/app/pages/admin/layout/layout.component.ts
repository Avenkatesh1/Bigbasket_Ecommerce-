import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet ,RouterLink } from '@angular/router';
import { LoginService } from '../../../services/login/login.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  searchTxt: string = '';

  constructor(private loginSrv: LoginService){}

  onFilter(event:any){
    debugger
    this.loginSrv.searchBox.next(event);
  }
}
