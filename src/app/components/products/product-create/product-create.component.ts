import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  username$ = new Observable();

  constructor() { 
    this.username$ = of('');
  }

  ngOnInit(): void {
  }

  showName(): void {
    this.username$ = of('Marcos');
  }

}
