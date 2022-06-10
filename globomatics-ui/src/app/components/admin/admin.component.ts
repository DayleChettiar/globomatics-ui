import { Component, OnInit } from '@angular/core';
import { GlobomaticsService } from '../../services/globomatics.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public globomatics;

  constructor(private globomaticsService: GlobomaticsService) { }

  ngOnInit(): void {
    this.getBikes()
  }

  getBikes() {
    this.globomaticsService.getBikes().subscribe(
      data => { this.globomatics = data },
      err => console.error(err),
      () => console.log('bikes loaded')
    );
  } 
  
}
