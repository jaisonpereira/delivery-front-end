import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem
  @Output() add = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
//emitindo evento dizendo que alguem clicou
  emitAddEvent() {
    this.add.emit(this.menuItem)
  }

}
