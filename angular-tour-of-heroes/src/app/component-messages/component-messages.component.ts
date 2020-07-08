import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-component-messages',
  templateUrl: './component-messages.component.html',
  styleUrls: ['./component-messages.component.sass']
})
export class ComponentMessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
