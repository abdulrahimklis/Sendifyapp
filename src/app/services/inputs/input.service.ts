import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  private products = {
    "items": [
      {
        "cost":62.98,
        "currency":"sek",
        "lead_time":2,
        "product":"dhl_1",
        "image": "../../../../assets/material/dhl.svg"
      },

      { "cost":134,
        "currency":"sek",
        "lead_time":2,
        "product":"ups_1",
        "image": "../../../../assets/material/ups.svg"
      },

      { "cost":147.23,
        "currency":"sek",
        "lead_time":2,
        "product":"dhl_2",
        "image": "../../../../assets/material/dhl.svg"
      },

      {
        "cost":416.21,
        "currency":"sek",
        "lead_time":1,
        "product":"tnt_1",
        "image": "../../../../assets/material/tnt.svg"
      },

      {
        "cost":98.23,
        "currency":"sek",
        "lead_time":3,
        "product":"tnt_2",
        "image": "../../../../assets/material/tnt.svg"
      },

      {
        "cost":349.21,
        "currency":"sek",
        "lead_time":1,
        "product":"tnt_3",
        "image": "../../../../assets/material/tnt.svg"
      },

      { "cost":1342.76,
        "currency":"sek",
        "lead_time":1,
        "product":"dhl_3",
        "image": "../../../../assets/material/dhl.svg"
      },

      { "cost":123,
        "currency":"sek",
        "lead_time":2,
        "product":"ups_2",
        "image": "../../../../assets/material/ups.svg"
      },

      { "cost":176,
        "currency":"sek",
        "lead_time":2,
        "product":"dsv_1",
        "image": "../../../../assets/material/dsv.svg"
      }
    ]
  };

  constructor() { }

  data() {
    return this.products;
  }
}
