import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _headerService: HeaderService) { 
    _headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }
  }
  
  ngOnInit(): void {
  }

}
