import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  plans = [];

  constructor() { }

  ngOnInit(): void {
    this.getAllPlans();
  }

  getAllPlans() {
    const plansList =
    [
      {
        name: 'Plan Free',
        description: 'No cuenta con ningun beneficio',
        cost: 'GRATIS',
      },
      {
        name: 'Plan Cobre',
        description: '5% de descuento',
        cost: 'PEN 5.00/mes ',
      }
    ];

    this.plans = plansList;
  }
}
