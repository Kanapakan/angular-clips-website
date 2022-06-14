import { ModalService } from 'src/app/service/modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public modal: ModalService) { }

  ngOnInit(): void {
  }

  openModal($event: Event) {
    $event.preventDefault()
    
    this.modal.toggleModal()
  }
}
