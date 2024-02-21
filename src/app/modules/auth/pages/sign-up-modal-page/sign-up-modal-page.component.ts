import { Component, OnInit, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sign-up-modal-page',
  templateUrl: './sign-up-modal-page.component.html',
  styleUrl: './sign-up-modal-page.component.css'
})
export class SignUpModalPageComponent implements OnInit{
  activeModal = inject(NgbActiveModal);

  constructor(){

  }

  ngOnInit(): void {
  }


}
