import { Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignUpModalPageComponent } from '../sign-up-modal-page/sign-up-modal-page.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent  implements OnInit, OnDestroy{

  formGroup:FormGroup = new FormGroup({});

  showPass:boolean = true;

  showType:string = 'password';

  constructor(private modal:NgbModal, private _login: LoginService, private route:Router){
    this.modal = new NgbModal;
    
    this.formGroup = new FormGroup({
      username: new FormControl('',[
        Validators.required,
        Validators.maxLength(5),
        Validators.minLength(5)
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

  ngOnInit(): void {
    
  }

  showPassword(){
    this.showPass = !this.showPass;
    this.showType = this.showPass? 'password' : 'text';
  }

  sendCredentials(){
    this._login.sendCredentials$(this.formGroup.value)
    .subscribe({
      next:(response)=>{
        this.route.navigate(['/','']);
        // console.log(response);
      },
      error: (err) => {
        console.log('Error en peticion',err);

      }
    })
  }

  modalOpen(){
    const modalRef = this.modal.open(SignUpModalPageComponent);
    
    // modalRef.shown.subscribe(()=>console.log('se abrio el modal'));
		// modalRef.dismissed.subscribe((e)=>console.log(e));
    // setTimeout(()=>{

    //   modalRef.close();
    // },1500);
  }

  ngOnDestroy(): void {
  }

}
