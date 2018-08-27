import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cheap-fast',
  templateUrl: './cheap-fast.component.html',
  styleUrls: ['./cheap-fast.component.css']
})
export class CheapFastComponent implements OnInit {
  @Input() top = [];
  @Input() selectedFilter = 'cost';

  constructor() { }

  ngOnInit() {
  }

}
