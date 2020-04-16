import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-balance',
  templateUrl: './current-balance.component.html',
  styleUrls: ['./current-balance.component.less']
})
export class CurrentBalanceComponent implements OnInit {

  transactions = [
    {"AccountNo": "***123", "Balance":"400.00", "DateLastTranfer":"21/Mayo/2019"},
    {"AccountNo": "***333", "Balance":"200.00", "DateLastTranfer":"25/Mayo/2019"},
    {"AccountNo": "***663", "Balance":"600.00", "DateLastTranfer":"28/Mayo/2019"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
