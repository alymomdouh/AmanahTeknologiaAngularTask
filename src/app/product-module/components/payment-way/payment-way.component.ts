import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import PaymentWayService from '../../services/payment-way.service';

@Component({
  selector: 'app-payment-way',
  templateUrl: './payment-way.component.html',
  styleUrls: ['./payment-way.component.css']
})
export class PaymentWayComponent implements OnInit {
  submitted = false;
  PaymentForm!: FormGroup;
  productId!: number;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: PaymentWayService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.productId = Number(params['id']);
      }
    });
    this.initCardPaymentForm();
  }
  initCardPaymentForm() {
    this.PaymentForm = this.formBuilder.group({
      ClientType: ['', Validators.required],
      CardNumber: ['', Validators.required],
      expireDate: ['', Validators.required],
      CardCVC: ['', Validators.required],
      CardHolderName: ['', Validators.required]
    });
  }
  saveCardPaymentForm() {
    debugger
    this.submitted = true;
    if (!this.PaymentForm.valid) {
      return;
    }
    // const CardNumber = this.PaymentForm.get('CardNumber')!.value;
    // const expireDate = this.PaymentForm.get('expireDate')!.value;
    // const CardCVC = this.PaymentForm.get('CardCVC')!.value;
    // const CardHolderName = this.PaymentForm.get('CardHolderName')!.value;

    const pamentModel = this.PaymentForm.value;
    pamentModel.productId = this.productId;
    this.service.payByCard(pamentModel).subscribe(
      id => this.router.navigateByUrl("/product/view-invoice/" + id)

    )

  }
}
