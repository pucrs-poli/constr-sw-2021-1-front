import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css']
})
export class PrimaryButtonComponent{

  @Input() text: string = '';
  @Input() icon: string = '';

  @Output() onClickedButton: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  onClick(){
    this.onClickedButton.emit();
  }
}
