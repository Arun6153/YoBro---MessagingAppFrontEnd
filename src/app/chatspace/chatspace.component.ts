import { Component } from '@angular/core';

@Component({
  selector: 'user-chat-space',
  templateUrl: './chatspace.component.html',
  styleUrls: ['./chatspace.component.css']
})

export class ChatspaceComponent {
  bind_id: number;

  constructor() { }

  setID(data: number) {
    this.bind_id = data;
    console.log(this.bind_id);
  }
}

export class TransferOnly {

  objTOnly: ChatspaceComponent;
  constructor() { }

  setID(id: number): void {
    this.objTOnly = new ChatspaceComponent();
    this.objTOnly.setID(id);
  }
}