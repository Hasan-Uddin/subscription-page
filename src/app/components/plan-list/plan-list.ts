import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plan-list',
  imports: [CommonModule],
  templateUrl: './plan-list.html',
  styleUrl: './plan-list.css',
})
export class PlanList {
  @Input() plans: any[] = []; // Receive plans from parent
  @Output() buy = new EventEmitter<any>(); // Emit when user clicks Buy

  onBuy(plan: any) {
    this.buy.emit(plan);
  }
}
