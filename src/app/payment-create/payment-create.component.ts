import { Component, OnInit } from '@angular/core';
import { Payment } from '../service/model/payment';
import { PaymentService } from '../service/payment.service';

@Component({
  selector: 'app-payment-create',
  templateUrl: './payment-create.component.html',
  styleUrls: ['./payment-create.component.scss']
})
export class PaymentCreateComponent implements OnInit {
  payment: Payment = {
    amount: 0,
    status: '',
    paymentMethod: '',
    paymentDate: '',
  };

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {}

  savePayment() {
    this.paymentService.create(this.payment).subscribe(() => {
      alert('Payment saved successfully!');
    });
  }
}
