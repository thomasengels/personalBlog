import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onMenuToggle = new EventEmitter<boolean>();
  private isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
      this.isOpen = !this.isOpen;
      this.onMenuToggle.emit(this.isOpen);
  }

}
