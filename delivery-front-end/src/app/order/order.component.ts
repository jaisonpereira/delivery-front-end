import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  payementOptions:RadioOption[]=[
  {label:'Dinheiro' ,value: 'MON'},
  {label:'Cartao de Débito' ,value: 'DEB'},
  {label:'Cartao Refeicao' ,value: 'REF'}
]

  constructor() { }

  ngOnInit() {
  }

}
