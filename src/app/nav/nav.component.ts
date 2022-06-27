import { ModalService } from 'src/app/services/modal.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // inject services
  constructor(
    public modal: ModalService,
    public auth: AuthService
    ) {
     }

  ngOnInit(): void {
  }

  openModal($event: Event) {
    $event.preventDefault()
    
    this.modal.toggleModal('auth')
  }
}
