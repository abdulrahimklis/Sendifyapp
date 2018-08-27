import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() selectedFilter = new EventEmitter();
  selectedValue = "cost";

  constructor() { }

  ngOnInit() {
  }

}
