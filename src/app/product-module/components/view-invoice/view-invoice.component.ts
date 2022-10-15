import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.css']
})
export class ViewInvoiceComponent implements OnInit {
  invoiceData: any;
  constructor(
    private service: InvoiceService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        let id = Number(params['id']);
        this.service.getById(id).subscribe(
          res => {
            console.log(res)
            debugger
            this.invoiceData = res;
          }
        )
      }
    });
  }
}
