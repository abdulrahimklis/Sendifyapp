import {Component, Input, OnInit} from '@angular/core';
import { InputService } from "../../../services/inputs/input.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products = [];
  @Input() selectedFilter = 'cost';

  constructor() { }

  ngOnInit() {}

}
