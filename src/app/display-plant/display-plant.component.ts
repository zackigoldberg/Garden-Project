import { Component, OnInit , Input } from '@angular/core';
import { platformCoreDynamicTesting } from '@angular/platform-browser-dynamic/testing/src/platform_core_dynamic_testing';
@Component({
  selector: 'app-display-plant',
  templateUrl: './display-plant.component.html',
  styleUrls: ['./display-plant.component.css']
})
export class DisplayPlantComponent implements OnInit {
  botanicals = {}

  ngOnInit() {
  }

  @Input ()
  get plants() : any {
    return this.botanicals
  }

  set plants(plant: any) {
    this.botanicals = (plant)
  }
}
