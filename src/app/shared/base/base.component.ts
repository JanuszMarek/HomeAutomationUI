import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {

  constructor(
    protected messageService: MessageService
    ) { }

  protected messageSucces(name: string, method: string) {
    this.messageService.add({severity:'success', summary: 'Success :)' , detail: name +' has been '+ method + '.', life: 5000});
  }

  protected messageError() {
    this.messageService.add({severity:'error', summary:'Error!', detail:'Something goes wrong :(', life: 5000});
  }
}
