import { Component, OnInit } from '@angular/core';
import { chatSpaceService } from './chat-space.service';
import { Authenticate } from '../components/auth';

@Component({
  selector: 'user-chat-space',
  templateUrl: './chatspace.component.html',
  styleUrls: ['./chatspace.component.css']
})

export class ChatspaceComponent implements OnInit{
  bind_id: number;
  messages:any;
  userLogged:Authenticate;
  sendMessage:any;
  private chatService:chatSpaceService;
  isMember:boolean;
  newMember:boolean;

  constructor() { }

  ngOnInit(){
    this.sendMessage={
      first:null,
      second:null,
      message:"",
    };
    this.isMember=false;
    this.newMember=true;
  }

  setID(data: number) {
    this.bind_id = data;
  }


////// it will triger on every send message
  BringClickedUserData():void
  {
    this.userLogged = new Authenticate();
    this.sendMessage.first=this.userLogged.user_id;
    this.sendMessage.second=this.bind_id;

    if(this.sendMessage.message == "") return;
    this.chatService.chatSendUsersId(this.sendMessage).subscribe(
      (res) => {
       console.log(this.sendMessage);
       this.sendMessage.message="";
      },
      error => {
        console.log(error)
      }
    );
  }
  goAddUser()
  {
    
  }
}

/////////// For SUBSTITUTING
export class TransferOnly {

  objTOnly: ChatspaceComponent;
  constructor() { }

  setID(id: number): void {
    this.objTOnly = new ChatspaceComponent();
    this.objTOnly.setID(id);
  }
}