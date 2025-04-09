import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ChekoutService } from '../service/chekout.service';

@Component({
  selector: 'app-cheakout',
  templateUrl: './cheakout.component.html',
  styleUrls: ['./cheakout.component.scss']
})
export class CheakoutComponent implements OnInit {
  format: string = 'pdf';  // Default format (can be changed by user)
  id: any = 4;   // Start date in ISO 8601 format
  subtotal: number = 4560;
  shippingFee: number = 100;
  voucherCode: string = '';
  discount: number = 0;

  constructor(private chekoutService: ChekoutService, private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


    cheakoutForm: FormGroup = new FormGroup({

      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      country: new FormControl(),
      street: new FormControl(),
      postal: new FormControl(),
      division: new FormControl(),
      shipping: new FormControl(),
      card: new FormControl()

    });

    save() {

      console.log(this.cheakoutForm.value);

      this.chekoutService.addPayment(this.cheakoutForm.value).subscribe((res: any) => {
        this.router.navigateByUrl('/chekoutList');

      });


    }

    pay() {
          alert('Payment Successful!!');
        }

        messege(){
          alert('Payment confirmed successfully!')
        }

        get total(): number {
    return this.subtotal + this.shippingFee - this.discount;
  }
  applyVoucher() {
    if (this.voucherCode.trim().toUpperCase() === 'DISCOUNT10') {
      this.discount = 100; // Example: Apply a 100 currency unit discount
    } else {
      this.discount = 0;
      alert('Invalid voucher code');
    }
  }
  }
