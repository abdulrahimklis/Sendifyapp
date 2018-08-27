import { Component, OnInit } from '@angular/core';
import {InputService} from "../../services/inputs/input.service";

@Component({
  selector: 'app-choose-agency',
  templateUrl: './choose-agency.component.html',
  styleUrls: ['./choose-agency.component.css']
})
export class ChooseAgencyComponent implements OnInit {
  products = [];
  selectedFilter = "cost";

  constructor( public data: InputService ) { }

  ngOnInit() {
    this.products = this.data.data().items;
    console.log(this.products)
  }

}
