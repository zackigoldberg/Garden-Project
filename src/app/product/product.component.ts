import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup} from '@angular/forms';
import {formControlBinding} from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { DatabaseService } from '../services/productservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  useBtn : boolean = false;
  plants : Array<any> = [];

  constructor(private _dbService: DatabaseService) { }

  ngOnInit() {
    this.onFindPlants();
  }
  
onFindPlants(): void {
    this._dbService.getPlants().subscribe(Plant => {
      this.plants=Plant;
    })
}

  }