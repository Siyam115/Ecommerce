import { Component, OnInit } from '@angular/core';
import { Payment } from '../service/model/payment';
import { PaymentService } from '../service/payment.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnInit {
  payments: Payment[] = [];

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.loadPayments();
  }

  loadPayments() {
    this.paymentService.getAll().subscribe((data) => {
      this.payments = data;
    });
  }

  deletePayment(id: number) {
    this.paymentService.delete(id).subscribe(() => {
      this.loadPayments();
    });
  }
}
