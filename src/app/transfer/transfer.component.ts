import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.less']
})
export class TransferComponent implements OnInit {
  transferForm: FormGroup;
  title:"Group";
  
  transactionsByAccount =[
    {
      "AccountOrigin":"***123", 
      "AccountDestination":"***123", 
      "transacctions": [
          {"AccountNo": "***123", "Amount":"400.00", "DateTranfer":"21/Mayo/2019"},
          {"AccountNo": "***123", "Amount":"400.00", "DateTranfer":"21/Mayo/2019"},
      ]
    },
    {
      "AccountOrigin":"***123", 
      "AccountDestination":"***123", 
      "transacctions": [
          {"AccountNo": "***123", "Amount":"400.00", "DateTranfer":"21/Mayo/2019"},
          {"AccountNo": "***123", "Amount":"400.00", "DateTranfer":"21/Mayo/2019"},
      ]
    }
  ];
  

  chartOptions = {
    series: [44, 55, 13, 43, 22],
    chart: {
      width: 380,
      type: "pie"
    }
  };

  constructor(private formBuilder: FormBuilder) {
    this.transferForm = this.formBuilder.group({
      accountOrigin: ['', [Validators.required,Validators.minLength(8), Validators.maxLength(20)]],
      accountDestination: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      amount: ['', [Validators.required]]
  });
  
  }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

}
